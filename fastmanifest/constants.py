# constants.py
#
# Copyright 2016 Facebook, Inc.
#
# This software may be used and distributed according to the terms of the
# GNU General Public License version 2 or any later version.

CACHE_SUBDIR = "manifestcache"
DEFAULT_LOWGROWTH_TRESHOLDGB = 20
DEFAULT_MAXCACHESIZEGB = 6
DEFAULT_LOWGROWTH_SLOPE = 0.1
DEFAULT_HIGHGROWTHSLOPE = 0.2

"""How old of a lock do we tolerate before we spawn off a new worker to populate
the cache."""
WORKER_SPAWN_LOCK_STEAL_TIMEOUT = 300
