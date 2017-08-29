  $ . "$TESTDIR/library.sh"

  $ PYTHONPATH=$TESTDIR/..:$PYTHONPATH
  $ export PYTHONPATH

Setup the server

  $ hginit master
  $ cd master
  $ cat >> .hg/hgrc <<EOF
  > [extensions]
  > bundle2hooks=$TESTDIR/../hgext3rd/bundle2hooks.py
  > pushrebase=$TESTDIR/../hgext3rd/pushrebase.py
  > treemanifest=$TESTDIR/../treemanifest
  > [treemanifest]
  > server=True
  > [remotefilelog]
  > server=True
  > EOF

Make local commits on the server
  $ mkdir subdir
  $ echo x > subdir/x
  $ hg commit -qAm 'add subdir/x'

The following will simulate the transition from flat to tree-only
1. Flat only client, with flat only draft commits
2. Hybrid client, with some flat and some flat+tree draft commits
3. Tree-only client, with only tree commits (old flat are converted)

Create flat manifest client
  $ cd ..
  $ hgcloneshallow ssh://user@dummy/master client -q
  1 files fetched over 1 fetches - (1 misses, 0.00% hit ratio) over * (glob)
  $ cd client
  $ cat >> .hg/hgrc <<EOF
  > [extensions]
  > fbamend=$TESTDIR/../hgext3rd/fbamend
  > EOF

Make a flat-only draft commit
  $ echo f >> subdir/x
  $ hg commit -qm "flat only commit"
  $ hg up '.^'
  1 files updated, 0 files merged, 0 files removed, 0 files unresolved

Transition to hybrid flat+tree client
  $ cat >> .hg/hgrc <<EOF
  > [extensions]
  > treemanifest=$TESTDIR/../treemanifest
  > fastmanifest=$TESTDIR/../fastmanifest
  > [fastmanifest]
  > usetree=True
  > usecache=False
  > [treemanifest]
  > demanddownload=True
  > EOF

# Viewing commit from server should download trees
  $ hg log -r . --stat -T "{desc}\n"
  2 trees fetched over * (glob)
  add subdir/x
   subdir/x |  1 +
   1 files changed, 1 insertions(+), 0 deletions(-)
  
  $ ls_l $CACHEDIR/master/packs/manifests | wc -l
  \s*4 (re)

# Viewing flat draft commit should not produce tree packs
  $ hg log -r tip --stat -T '{desc}\n'
  flat only commit
   subdir/x |  1 +
   1 files changed, 1 insertions(+), 0 deletions(-)
  
  $ ls_l $CACHEDIR/master/packs/manifests | wc -l
  \s*4 (re)

Make a local hybrid flat+tree draft commit
  $ echo h >> subdir/x
  $ ls_l .hg/store | grep packs
  [1]
  $ hg commit -qm "hybrid flat+tree commit"
  $ hg up '.^'
  1 files updated, 0 files merged, 0 files removed, 0 files unresolved
  $ ls_l .hg/store/packs/manifests
  -r--r--r--    1106 3c68632603fbc30bd6ee720bd43c0f0940930cc8.dataidx
  -r--r--r--     211 3c68632603fbc30bd6ee720bd43c0f0940930cc8.datapack
  -r--r--r--    1196 54389aae9b0f11d9cc4e33901e6de68bad129e73.histidx
  -r--r--r--     183 54389aae9b0f11d9cc4e33901e6de68bad129e73.histpack

Transition to tree-only client
  $ cat >> .hg/hgrc <<EOF
  > [treemanifest]
  > treeonly=True
  > sendtrees=True
  > sendflat=False
  > EOF

Make a local tree-only draft commit
  $ ls_l .hg/store/packs/manifests | wc -l
  \s*4 (re)
  $ echo t >> subdir/x
  $ hg commit -qm "tree only commit"
  1 trees fetched over * (glob)
  $ hg debugdata -c 3
  7fdb5a91151d114ca83c30c5cb4a1029ef9700ef
  test
  0 0
  subdir/x
  
  tree only commit (no-eol)
  $ ls_l .hg/store/packs/manifests | wc -l
  \s*8 (re)
# No manifest revlog revision was added
  $ hg debugindex -m --config treemanifest.treeonly=False
     rev    offset  length  delta linkrev nodeid       p1           p2
       0         0      51     -1       0 85b359fdb09e 000000000000 000000000000
       1        51      51     -1       1 c0196aba344d 85b359fdb09e 000000000000
       2       102      51     -1       2 0427baa4e948 85b359fdb09e 000000000000

Tree-only amend
  $ echo >> subdir/x
  $ hg commit --amend
  saved backup bundle to $TESTTMP/client/.hg/strip-backup/779a137458d0-42851918-amend.hg (glob)
# Two sets of packs were added (temp commit + amend commit)
  $ ls_l .hg/store/packs/manifests | wc -l
  \s*16 (re)
# No manifest revlog revision was added
  $ hg debugindex -m --config treemanifest.treeonly=False
     rev    offset  length  delta linkrev nodeid       p1           p2
       0         0      51     -1       0 85b359fdb09e 000000000000 000000000000
       1        51      51     -1       1 c0196aba344d 85b359fdb09e 000000000000
       2       102      51     -1       2 0427baa4e948 85b359fdb09e 000000000000

# Delete the original commits packs
  $ rm -rf .hg/store/packs/manifests/26653c55cb54ab20aeb188315d736fb2ece04cd1*
  $ rm -rf .hg/store/packs/manifests/2a492611dfb8fbde1652e7e54fa1f64b82bd8ff7*
  $ ls_l .hg/store/packs/manifests | wc -l
  \s*12 (re)

Test looking at the tree from inside the bundle
  $ hg log -r tip -vp -R $TESTTMP/client/.hg/strip-backup/779a137458d0-42851918-amend.hg --pager=off
  changeset:   5:5fb87f99628c
  tag:         tip
  user:        test
  date:        Thu Jan 01 00:00:00 1970 +0000
  files:       subdir/x
  description:
  temporary amend commit for 779a137458d0
  
  
  diff -r 779a137458d0 -r 5fb87f99628c subdir/x
  --- a/subdir/x	Thu Jan 01 00:00:00 1970 +0000
  +++ b/subdir/x	Thu Jan 01 00:00:00 1970 +0000
  @@ -1,2 +1,3 @@
   x
   t
  +
  

Test unbundling the original commit
# Bring the original commit back from the bundle
  $ hg unbundle $TESTTMP/client/.hg/strip-backup/779a137458d0-42851918-amend.hg
  adding changesets
  adding manifests
  adding file changes
  added 2 changesets with 0 changes to 0 files (+1 heads)
  (run 'hg heads .' to see heads, 'hg merge' to merge)
# Verify the packs were brought back and the data is accessible
  $ ls_l .hg/store/packs/manifests | wc -l
  \s*16 (re)
  $ hg log -r tip --stat
  changeset:   5:5fb87f99628c
  tag:         tip
  user:        test
  date:        Thu Jan 01 00:00:00 1970 +0000
  summary:     temporary amend commit for 779a137458d0
  
   subdir/x |  1 +
   1 files changed, 1 insertions(+), 0 deletions(-)
  
Test pulling new commits from a hybrid server
  $ cd ../master
  $ echo x >> subdir/x
  $ hg commit -qAm 'modify subdir/x'
  $ hg log -r tip -T '{manifest}'
  1:d9920715ba88 (no-eol)

  $ cd ../client
  $ hg pull
  pulling from ssh://user@dummy/master
  searching for changes
  adding changesets
  adding manifests
  adding file changes
  added 1 changesets with 0 changes to 0 files (+1 heads)
  (run 'hg heads .' to see heads, 'hg merge' to merge)

  $ hg debugindex -m --config treemanifest.treeonly=False
     rev    offset  length  delta linkrev nodeid       p1           p2
       0         0      51     -1       0 85b359fdb09e 000000000000 000000000000
       1        51      51     -1       1 c0196aba344d 85b359fdb09e 000000000000
       2       102      51     -1       2 0427baa4e948 85b359fdb09e 000000000000
  $ hg log -r tip --stat --pager=off
  2 trees fetched over * (glob)
  changeset:   6:2937cde31c19
  tag:         tip
  parent:      0:2278cc8c6ce6
  user:        test
  date:        Thu Jan 01 00:00:00 1970 +0000
  summary:     modify subdir/x
  
   subdir/x |  1 +
   1 files changed, 1 insertions(+), 0 deletions(-)
  
  1 files fetched over 1 fetches - (1 misses, 0.00% hit ratio) over * (glob)

Test rebasing treeonly commits
  $ hg rebase -d 6 -b 2
  rebasing 2:4b702090309e "hybrid flat+tree commit"
  merging subdir/x
  warning: conflicts while merging subdir/x! (edit, then use 'hg resolve --mark')
  unresolved conflicts (see hg resolve, then hg rebase --continue)
  [1]
  $ printf "x\nx\nh\n" > subdir/x
  $ hg resolve --mark subdir/x
  (no more unresolved files)
  continue: hg rebase --continue
  $ hg rebase --continue
  rebasing 2:4b702090309e "hybrid flat+tree commit"
  saved backup bundle to $TESTTMP/client/.hg/strip-backup/4b702090309e-7a0f0c5f-rebase.hg (glob)

Test histedit treeonly commits
  $ hg up -q 38a88da6315b
  $ echo y > y
  $ hg commit -Aqm 'add y'
  $ hg histedit --config extensions.histedit= --commands - <<EOF
  > pick 0b82d7242702 add y
  > pick 38a88da6315b hybrid flat+tree commit
  > EOF
  saved backup bundle to $TESTTMP/client/.hg/strip-backup/38a88da6315b-77d91db7-histedit.hg (glob)
  $ hg log -l 2 -G -T '{desc}'
  @  hybrid flat+tree commit
  |
  o  add y
  |
  ~

Test peer-to-peer push/pull of tree only commits
  $ cd ..
  $ clearcache
# TODO: Test tree only clone
  $ hgcloneshallow ssh://user@dummy/master client2 -q
  1 files fetched over 1 fetches - (1 misses, 0.00% hit ratio) over * (glob)
  $ cd client2
  $ cp ../client/.hg/hgrc .hg/hgrc

# Test pulling from a treeonly peer
  $ hg pull -r tip ssh://user@dummy/client --debug 2>&1 | egrep "(payload|treegroup)"
  bundle2-input-part: total payload size 980
  bundle2-input-part: total payload size 171
  bundle2-input-part: "b2x:treegroup2" (params: 3 mandatory) supported
  bundle2-input-part: total payload size 948
  $ hg up tip
  2 trees fetched over * (glob)
  3 files updated, 0 files merged, 0 files removed, 0 files unresolved
  $ hg log -G -l 3 -T '{desc}' --stat
  @  hybrid flat+tree commit subdir/x |  1 +
  |   1 files changed, 1 insertions(+), 0 deletions(-)
  |
  o  add y subdir/x.orig |  2 ++
  |   y             |  1 +
  |   2 files changed, 3 insertions(+), 0 deletions(-)
  |
  2 trees fetched over * (glob)
  o  modify subdir/x subdir/x |  1 +
  |   1 files changed, 1 insertions(+), 0 deletions(-)
  ~
  1 files fetched over 1 fetches - (1 misses, 0.00% hit ratio) over * (glob)

# Test pushing to a treeonly peer
  $ echo y >> y
  $ hg commit -qm "modify y"
  1 trees fetched over * (glob)
  $ hg push -f -r . ssh://user@dummy/client --debug 2>&1 | grep treegroup
  bundle2-output-part: "b2x:treegroup2" (params: 3 mandatory) streamed payload
  $ cd ../client
  $ hg log -r tip -T '{desc}\n' --stat
  modify y
   y |  1 +
   1 files changed, 1 insertions(+), 0 deletions(-)
  
Test bundling
  $ hg bundle -r 'tip~3::tip' ../mybundle.hg
  searching for changes
  3 changesets found
  $ cd ..
  $ hgcloneshallow ssh://user@dummy/master client3 -q
  $ cd client3
  $ cp ../client/.hg/hgrc .hg/hgrc
  $ hg unbundle ../mybundle.hg
  adding changesets
  adding manifests
  adding file changes
  added 3 changesets with 4 changes to 3 files
  (run 'hg update' to get a working copy)
  $ hg log -r 'tip^::tip' -G -T "{desc}\n" --stat
  o  modify y
  |   y |  1 +
  |   1 files changed, 1 insertions(+), 0 deletions(-)
  |
  o  hybrid flat+tree commit
  |   subdir/x |  1 +
  ~   1 files changed, 1 insertions(+), 0 deletions(-)
  

TODO
# Access the pre-tree commit
# log -T "{manifest}" #TODO: edit templatekw.showmanifest
