"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6248],{3905:(e,n,o)=>{o.r(n),o.d(n,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>l});var t=o(67294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},r.apply(this,arguments)}function m(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?m(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):m(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var d=t.createContext({}),l=function(e){return function(n){var o=c(n.components);return t.createElement(e,r({},n,{components:o}))}},c=function(e){var n=t.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},p=function(e){var n=c(e.components);return t.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},b=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=c(o),p=a,b=l["".concat(m,".").concat(p)]||l[p]||u[p]||r;return o?t.createElement(b,i(i({ref:n},d),{},{components:o})):t.createElement(b,i({ref:n},d))}));function f(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,m=new Array(r);m[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,m[1]=i;for(var d=2;d<r;d++)m[d]=o[d];return t.createElement.apply(null,m)}return t.createElement.apply(null,o)}b.displayName="MDXCreateElement"},77811:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>m,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=o(83117),a=(o(67294),o(3905));const r={sidebar_position:70},m="Rebase",i={unversionedId:"overview/rebase",id:"overview/rebase",title:"Rebase",description:'While the word "rebase" is a bit confusing, it fundamentally just means moving',source:"@site/docs/overview/rebase.md",sourceDirName:"overview",slug:"/overview/rebase",permalink:"/docs/overview/rebase",draft:!1,editUrl:"https://github.com/facebookexperimental/eden/tree/main/website/docs/overview/rebase.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Stacks of commits",permalink:"/docs/overview/stacks"},next:{title:"Pull / push",permalink:"/docs/overview/push-pull"}},s={},d=[{value:"Examples",id:"examples",level:3},{value:"-b / --base",id:"-b----base",level:4},{value:"-s / --source",id:"-s----source",level:4},{value:"-r / --revisions",id:"-r----revisions",level:4},{value:"Other",id:"other",level:4}],l={toc:d};function c(e){let{components:n,...o}=e;return(0,a.mdx)("wrapper",(0,t.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"rebase"},"Rebase"),(0,a.mdx)("p",null,'While the word "rebase" is a bit confusing, it fundamentally just means moving\ncommits from one part of the repository to another. In Sapling, this is\ndone with the ',(0,a.mdx)("inlineCode",{parentName:"p"},"sl rebase")," command."),(0,a.mdx)("p",null,"Rebasing requires two pieces of information:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Which commits will be moved, via one of the flags ",(0,a.mdx)("inlineCode",{parentName:"li"},"-r")," (revisions), ",(0,a.mdx)("inlineCode",{parentName:"li"},"-s")," (source), or  ",(0,a.mdx)("inlineCode",{parentName:"li"},"-b")," (base)."),(0,a.mdx)("li",{parentName:"ol"},"The destination commit to move the commits to, via the ",(0,a.mdx)("inlineCode",{parentName:"li"},"-d"),"\n(destination) flag.")),(0,a.mdx)("h3",{id:"examples"},"Examples"),(0,a.mdx)("p",null,"To illustrate the different types of rebases, assume we start with the following\ncommit graph. Note that we are currently on Commit C, as indicated by the ",(0,a.mdx)("inlineCode",{parentName:"p"},"@"),"\nsymbol."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ sl\no  d78f66e01  106 seconds ago  remote/main\n\u2577\n\u2577 o  306ce5ffb  67 seconds ago  mary\n\u2577 \u2502  Commit F\n\u2577 \u2502\n\u2577 o  2ff5f28a1  67 seconds ago  mary\n\u2577 \u2502  Commit E\n\u2577 \u2502\n\u2577 \u2502 o  e5513dac4  67 seconds ago  mary\n\u2577 \u2502 \u2502  Commit D\n\u2577 \u2502 \u2502\n\u2577 \u2502 @  6f782187a  67 seconds ago  mary\n\u2577 \u251c\u2500\u256f  Commit C\n\u2577 \u2502\n\u2577 o  3beadc099  67 seconds ago  mary\n\u2577 \u2502  Commit B\n\u2577 \u2502\n\u2577 o  b48ce5c8e  67 seconds ago  mary\n\u256d\u2500\u256f  Commit A\n\u2502\no  17af69994  Today at 08:33  remote/stable\n")),(0,a.mdx)("h4",{id:"-b----base"},"-b / --base"),(0,a.mdx)("p",null,"The most common use for rebase is to move your in-progress commits onto a newer\nversion of main.  The ",(0,a.mdx)("inlineCode",{parentName:"p"},"-b")," flag is ideal for this situation, as it will take the\nentire subtree of your commits and move them onto the destination."),(0,a.mdx)("p",null,"Below we use ",(0,a.mdx)("inlineCode",{parentName:"p"},"-b .")," to rebase the current commit, ",(0,a.mdx)("inlineCode",{parentName:"p"},"."),", and its entire related\nsubtree onto main. In this case, the subtree is Commit A and all of its\ndescendants."),(0,a.mdx)("p",null,"Note that ",(0,a.mdx)("inlineCode",{parentName:"p"},"sl rebase -b . -d XXX")," is the same as ",(0,a.mdx)("inlineCode",{parentName:"p"},"sl rebase -d XXX"),", as ",(0,a.mdx)("inlineCode",{parentName:"p"},"-b ."),"\nis the default behavior."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"# Move entire current subtree onto main.\n$ sl rebase -b . -d main\n  o  91ecebda8  12 seconds ago  mary\n  \u2502  Commit F\n  \u2502\n  o  b26b55434  12 seconds ago  mary\n  \u2502  Commit E\n  \u2502\n  \u2502 o  a9ef0ee2d  12 seconds ago  mary\n  \u2502 \u2502  Commit D\n  \u2502 \u2502\n  \u2502 @  37d2d0296  12 seconds ago  mary\n  \u251c\u2500\u256f  Commit C\n  \u2502\n  o  37d536158  12 seconds ago  mary\n  \u2502  Commit B\n  \u2502\n  o  81910236f  12 seconds ago  mary\n\u256d\u2500\u256f  Commit A\n\u2502\no  d78f66e01  15 minutes ago  remote/main\n\u2577\no  17af69994  Today at 08:33  remote/stable\n")),(0,a.mdx)("h4",{id:"-s----source"},"-s / --source"),(0,a.mdx)("p",null,"If you don't want to rebase the entire subtree with ",(0,a.mdx)("inlineCode",{parentName:"p"},"-b"),", you can use ",(0,a.mdx)("inlineCode",{parentName:"p"},"-s")," to\nrebase a given commit and all of its descendants."),(0,a.mdx)("p",null,"Below we use ",(0,a.mdx)("inlineCode",{parentName:"p"},"-s .")," to rebase the current commit, ",(0,a.mdx)("inlineCode",{parentName:"p"},"."),", and its descendant\n",(0,a.mdx)("inlineCode",{parentName:"p"},"Commit D")," onto ",(0,a.mdx)("inlineCode",{parentName:"p"},"main"),". All other commits are left behind."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"# Move current commit and its descendants onto main.\n$ sl rebase -s . -d main\n  o  aa40b4d44  44 seconds ago  mary\n  \u2502  Commit D\n  \u2502\n  @  95cf1e999  44 seconds ago  mary\n\u256d\u2500\u256f  Commit C\n\u2502\no  d78f66e01  11 minutes ago  remote/main\n\u2577\n\u2577 o  306ce5ffb  11 minutes ago  mary\n\u2577 \u2502  Commit F\n\u2577 \u2502\n\u2577 o  2ff5f28a1  11 minutes ago  mary\n\u2577 \u2502  Commit E\n\u2577 \u2502\n\u2577 o  3beadc099  11 minutes ago  mary\n\u2577 \u2502  Commit B\n\u2577 \u2502\n\u2577 o  b48ce5c8e  11 minutes ago  mary\n\u256d\u2500\u256f  Commit A\n\u2502\no  17af69994  Today at 08:33  remote/stable\n")),(0,a.mdx)("h4",{id:"-r----revisions"},"-r / --revisions"),(0,a.mdx)("p",null,"If we only want to move a specific commit or commits, we use ",(0,a.mdx)("inlineCode",{parentName:"p"},"-r")," to move\nexactly the commits we specified."),(0,a.mdx)("p",null,"Below we move the commit we're on by specifying ",(0,a.mdx)("inlineCode",{parentName:"p"},".")," as the argument to ",(0,a.mdx)("inlineCode",{parentName:"p"},"-r"),".  We\nmove it onto ",(0,a.mdx)("inlineCode",{parentName:"p"},"main")," by specifying ",(0,a.mdx)("inlineCode",{parentName:"p"},"main")," as the argument to ",(0,a.mdx)("inlineCode",{parentName:"p"},"-d"),"."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'# Move just the current commit to be based on main\n$ sl rebase -r . -d main\nrebasing 6f782187aa42 "Commit C"\n6f782187aa42 -> 8abef7d37f3a "Commit C"\n$ sl\n  @  8abef7d37  6 seconds ago  mary\n\u256d\u2500\u256f  Commit C\n\u2502\no  d78f66e01  4 minutes ago  remote/main\n\u2577\n\u2577 o  306ce5ffb  3 minutes ago  mary\n\u2577 \u2502  Commit F\n\u2577 \u2502\n\u2577 o  2ff5f28a1  3 minutes ago  mary\n\u2577 \u2502  Commit E\n\u2577 \u2502\n\u2577 \u2502 o  e5513dac4  3 minutes ago  mary\n\u2577 \u2502 \u2502  Commit D\n\u2577 \u2502 \u2502\n\u2577 \u2502 x  6f782187a [Rebased to 8abef7d37f3a]  3 minutes ago  mary\n\u2577 \u251c\u2500\u256f  Commit C\n\u2577 \u2502\n\u2577 o  3beadc099  3 minutes ago  mary\n\u2577 \u2502  Commit B\n\u2577 \u2502\n\u2577 o  b48ce5c8e  3 minutes ago  mary\n\u256d\u2500\u256f  Commit A\n\u2502\no  17af69994  Today at 08:33  remote/stable\n')),(0,a.mdx)("p",null,"Note how ",(0,a.mdx)("inlineCode",{parentName:"p"},"6f782187a")," is identified with an ",(0,a.mdx)("inlineCode",{parentName:"p"},"x")," in the commit graph to denote that it\nhas been rewritten to the newer version ",(0,a.mdx)("inlineCode",{parentName:"p"},"8abef7d37f3a"),".  However, it is still visible\nbecause commit D did not get rebased."),(0,a.mdx)("h4",{id:"other"},"Other"),(0,a.mdx)("p",null,"The rebase command can move multiple stacks and subtrees in a single invocation. The tree structure will be retained across the rebase. For example, one can use the ",(0,a.mdx)("inlineCode",{parentName:"p"},"draft()")," revset to rebase all of your local commits onto a newer base commit."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ sl\no  b5d600552  27 seconds ago  remote/main\n\u2577\n\u2577 o  9d5ba71bc  2 minutes ago  mary\n\u2577 \u2502  Commit C\n\u2577 \u2502\n\u2577 \u2502 o  37d536158  12 minutes ago  mary\n\u2577 \u251c\u2500\u256f  Commit B\n\u2577 \u2502\n\u2577 o  81910236f  12 minutes ago  mary\n\u256d\u2500\u256f  Commit A\n\u2502\no  d78f66e01  27 minutes ago\n\u2577\n\u2577 @  ecf227650  69 seconds ago  mary\n\u2577 \u2502  Commit Two\n\u2577 \u2502\n\u2577 o  5da2b3e5a  91 seconds ago  mary\n\u256d\u2500\u256f  Commit One\n\u2502\no  17af69994  Today at 08:33  remote/stable\n\n# Rebase all my commits onto new main.\n$ sl rebase -r 'draft()' -d main\n\n$ sl\n  o  3c5549fb7  10 seconds ago  mary\n  \u2502  Commit C\n  \u2502\n  \u2502 o  ed3106510  10 seconds ago  mary\n  \u251c\u2500\u256f  Commit B\n  \u2502\n  o  23a6f6012  10 seconds ago  mary\n\u256d\u2500\u256f  Commit A\n\u2502\n\u2502 @  9f73762dd  10 seconds ago  mary\n\u2502 \u2502  Commit Two\n\u2502 \u2502\n\u2502 o  9d550d707  10 seconds ago  mary\n\u251c\u2500\u256f  Commit One\n\u2502\no  b5d600552  3 minutes ago  remote/main\n\u2577\no  17af69994  Today at 08:33  remote/stable\n")))}c.isMDXComponent=!0}}]);