#!/usr/bin/env python3
# Copyright (c) Facebook, Inc. and its affiliates.
#
# This software may be used and distributed according to the terms of the
# GNU General Public License version 2.

# pyre-strict

import unittest
from pathlib import Path

from eden.fs.cli import main as main_mod
from eden.fs.cli.config import (
    EdenCheckout,
    EdenInstance,
    CheckoutConfig,
    DEFAULT_REVISION,
)
from facebook.eden.ttypes import MountInfo, MountState

from .lib.output import TestOutput


class ListTest(unittest.TestCase):
    def test_no_mounts(self) -> None:
        out = TestOutput()
        mounts = EdenInstance._combine_mount_info([], [])
        main_mod.ListCmd.print_mounts(out, mounts)
        self.assertEqual(out.getvalue(), "")

    def test_list_mounts_no_backing_repos(self) -> None:
        self.maxDiff = None

        thrift_mounts = [
            MountInfo(
                mountPoint=b"/data/users/johndoe/mercurial",
                edenClientPath=b"/home/johndoe/.eden/clients/mercurial",
                state=MountState.RUNNING,
            ),
            MountInfo(
                mountPoint=b"/data/users/johndoe/git",
                edenClientPath=b"/home/johndoe/.eden/clients/git",
                state=MountState.SHUTTING_DOWN,
            ),
            MountInfo(
                mountPoint=b"/data/users/johndoe/apache",
                edenClientPath=b"/home/johndoe/.eden/clients/apache",
                state=MountState.RUNNING,
            ),
            MountInfo(
                mountPoint=b"/data/users/johndoe/configs",
                edenClientPath=b"/home/johndoe/.eden/clients/configs",
                state=MountState.INITIALIZING,
            ),
            MountInfo(
                mountPoint=b"/data/users/johndoe/repos/linux",
                edenClientPath=b"/home/johndoe/.eden/clients/linux",
                state=MountState.RUNNING,
            ),
            MountInfo(
                mountPoint=b"/data/users/johndoe/other_repos/linux",
                edenClientPath=b"/home/johndoe/.eden/clients/linux2",
                state=MountState.RUNNING,
            ),
        ]
        instance = EdenInstance(
            config_dir="/home/johndoe/.eden",
            etc_eden_dir="/etc/eden",
            home_dir="/home/johndoe",
        )

        checkout1 = EdenCheckout(
            instance,
            Path("/data/users/johndoe/mercurial"),
            Path("/home/johndoe/.eden/clients/mercurial"),
        )
        checkout1.set_config(
            CheckoutConfig(
                backing_repo=Path("/home/johndoe/eden-repos/mercurial"),
                scm_type="hg",
                mount_protocol="fuse",
                default_revision=DEFAULT_REVISION["hg"],
                redirections={},
                active_prefetch_profiles=[],
            )
        )

        checkout2 = EdenCheckout(
            instance,
            Path("/data/users/johndoe/git"),
            Path("/home/johndoe/.eden/clients/git"),
        )
        checkout2.set_config(
            CheckoutConfig(
                backing_repo=Path("/home/johndoe/eden-repos/git"),
                scm_type="git",
                mount_protocol="fuse",
                default_revision=DEFAULT_REVISION["git"],
                redirections={},
                active_prefetch_profiles=[],
            )
        )

        checkout3 = EdenCheckout(
            instance,
            Path("/data/users/johndoe/repos/linux"),
            Path("/home/johndoe/.eden/clients/linux"),
        )
        checkout3.set_config(
            CheckoutConfig(
                backing_repo=Path("/home/johndoe/eden-repos/linux"),
                scm_type="git",
                mount_protocol="fuse",
                default_revision=DEFAULT_REVISION["git"],
                redirections={},
                active_prefetch_profiles=[],
            )
        )

        checkout4 = EdenCheckout(
            instance,
            Path("/data/users/johndoe/other_repos/linux"),
            Path("/home/johndoe/.eden/clients/linux2"),
        )
        checkout4.set_config(
            CheckoutConfig(
                backing_repo=Path("/home/johndoe/eden-repos/linux"),
                scm_type="git",
                mount_protocol="fuse",
                default_revision=DEFAULT_REVISION["git"],
                redirections={},
                active_prefetch_profiles=[],
            )
        )

        checkout5 = EdenCheckout(
            instance,
            Path("/data/users/johndoe/www"),
            Path("/home/johndoe/.eden/clients/www"),
        )
        checkout5.set_config(
            CheckoutConfig(
                backing_repo=Path("/home/johndoe/eden-repos/www"),
                scm_type="hg",
                mount_protocol="fuse",
                default_revision=DEFAULT_REVISION["hg"],
                redirections={},
                active_prefetch_profiles=[],
            )
        )

        config_checkouts = [
            checkout1,
            checkout2,
            checkout3,
            checkout4,
            checkout5,
        ]

        mounts = EdenInstance._combine_mount_info(thrift_mounts, config_checkouts)

        normal_out = TestOutput()
        main_mod.ListCmd.print_mounts(normal_out, mounts)
        self.assertEqual(
            """\
/data/users/johndoe/apache (unconfigured)
/data/users/johndoe/configs (INITIALIZING) (unconfigured)
/data/users/johndoe/git (SHUTTING_DOWN)
/data/users/johndoe/mercurial
/data/users/johndoe/other_repos/linux
/data/users/johndoe/repos/linux
/data/users/johndoe/www (not mounted)
""",
            normal_out.getvalue(),
        )

        json_out = TestOutput()
        main_mod.ListCmd.print_mounts_json(json_out, mounts)
        self.assertEqual(
            """\
{
  "/data/users/johndoe/apache": {
    "backing_repo": null,
    "configured": false,
    "data_dir": "/home/johndoe/.eden/clients/apache",
    "state": "RUNNING"
  },
  "/data/users/johndoe/configs": {
    "backing_repo": null,
    "configured": false,
    "data_dir": "/home/johndoe/.eden/clients/configs",
    "state": "INITIALIZING"
  },
  "/data/users/johndoe/git": {
    "backing_repo": "/home/johndoe/eden-repos/git",
    "configured": true,
    "data_dir": "/home/johndoe/.eden/clients/git",
    "state": "SHUTTING_DOWN"
  },
  "/data/users/johndoe/mercurial": {
    "backing_repo": "/home/johndoe/eden-repos/mercurial",
    "configured": true,
    "data_dir": "/home/johndoe/.eden/clients/mercurial",
    "state": "RUNNING"
  },
  "/data/users/johndoe/other_repos/linux": {
    "backing_repo": "/home/johndoe/eden-repos/linux",
    "configured": true,
    "data_dir": "/home/johndoe/.eden/clients/linux2",
    "state": "RUNNING"
  },
  "/data/users/johndoe/repos/linux": {
    "backing_repo": "/home/johndoe/eden-repos/linux",
    "configured": true,
    "data_dir": "/home/johndoe/.eden/clients/linux",
    "state": "RUNNING"
  },
  "/data/users/johndoe/www": {
    "backing_repo": "/home/johndoe/eden-repos/www",
    "configured": true,
    "data_dir": "/home/johndoe/.eden/clients/www",
    "state": "NOT_RUNNING"
  }
}
""",
            json_out.getvalue(),
        )

    def test_list_mounts_no_state(self) -> None:
        self.maxDiff = None

        # Simulate an older edenfs daemon that does not send the "state" field
        thrift_mounts = [
            MountInfo(
                mountPoint=b"/data/users/johndoe/mercurial",
                edenClientPath=b"/home/johndoe/.eden/clients/mercurial",
            ),
            MountInfo(
                mountPoint=b"/data/users/johndoe/git",
                edenClientPath=b"/home/johndoe/.eden/clients/git",
            ),
            MountInfo(
                mountPoint=b"/data/users/johndoe/configs",
                edenClientPath=b"/home/johndoe/.eden/clients/configs",
            ),
        ]
        instance = EdenInstance(
            config_dir="/home/johndoe/.eden",
            etc_eden_dir="/etc/eden",
            home_dir="/home/johndoe",
        )

        checkout1 = EdenCheckout(
            instance,
            Path("/data/users/johndoe/mercurial"),
            Path("/home/johndoe/.eden/clients/mercurial"),
        )
        checkout1.set_config(
            CheckoutConfig(
                backing_repo=Path("/home/johndoe/eden-repos/mercurial"),
                scm_type="hg",
                guid="789",
                mount_protocol="fuse",
                case_sensitive=False,
                require_utf8_path=True,
                default_revision=DEFAULT_REVISION["hg"],
                redirections={},
                active_prefetch_profiles=[],
                enable_tree_overlay=False,
            )
        )

        checkout2 = EdenCheckout(
            instance,
            Path("/data/users/johndoe/git"),
            Path("/home/johndoe/.eden/clients/git"),
        )
        checkout2.set_config(
            CheckoutConfig(
                backing_repo=Path("/home/johndoe/eden-repos/git"),
                scm_type="git",
                guid="321",
                mount_protocol="fuse",
                case_sensitive=False,
                require_utf8_path=True,
                default_revision=DEFAULT_REVISION["git"],
                redirections={},
                active_prefetch_profiles=[],
                enable_tree_overlay=False,
            )
        )

        checkout3 = EdenCheckout(
            instance,
            Path("/data/users/johndoe/www"),
            Path("/home/johndoe/.eden/clients/www"),
        )
        checkout3.set_config(
            CheckoutConfig(
                backing_repo=Path("/home/johndoe/eden-repos/www"),
                scm_type="hg",
                guid="654",
                mount_protocol="fuse",
                case_sensitive=False,
                require_utf8_path=True,
                default_revision=DEFAULT_REVISION["hg"],
                redirections={},
                active_prefetch_profiles=[],
                enable_tree_overlay=False,
            )
        )

        config_checkouts = [
            checkout1,
            checkout2,
            checkout3,
        ]

        mounts = EdenInstance._combine_mount_info(thrift_mounts, config_checkouts)

        normal_out = TestOutput()
        main_mod.ListCmd.print_mounts(normal_out, mounts)
        self.assertEqual(
            """\
/data/users/johndoe/configs (unconfigured)
/data/users/johndoe/git
/data/users/johndoe/mercurial
/data/users/johndoe/www (not mounted)
""",
            normal_out.getvalue(),
        )

        json_out = TestOutput()
        main_mod.ListCmd.print_mounts_json(json_out, mounts)
        self.assertEqual(
            """\
{
  "/data/users/johndoe/configs": {
    "backing_repo": null,
    "configured": false,
    "data_dir": "/home/johndoe/.eden/clients/configs",
    "state": "RUNNING"
  },
  "/data/users/johndoe/git": {
    "backing_repo": "/home/johndoe/eden-repos/git",
    "configured": true,
    "data_dir": "/home/johndoe/.eden/clients/git",
    "state": "RUNNING"
  },
  "/data/users/johndoe/mercurial": {
    "backing_repo": "/home/johndoe/eden-repos/mercurial",
    "configured": true,
    "data_dir": "/home/johndoe/.eden/clients/mercurial",
    "state": "RUNNING"
  },
  "/data/users/johndoe/www": {
    "backing_repo": "/home/johndoe/eden-repos/www",
    "configured": true,
    "data_dir": "/home/johndoe/.eden/clients/www",
    "state": "NOT_RUNNING"
  }
}
""",
            json_out.getvalue(),
        )

    def test_list_mounts_no_backing_repos(self) -> None:
        self.maxDiff = None

        thrift_mounts = [
            MountInfo(
                mountPoint=b"/data/users/johndoe/mercurial",
                edenClientPath=b"/home/johndoe/.eden/clients/mercurial",
                state=MountState.RUNNING,
                backingRepoPath=b"/home/johndoe/eden-repos/mercurial",
            ),
            MountInfo(
                mountPoint=b"/data/users/johndoe/git",
                edenClientPath=b"/home/johndoe/.eden/clients/git",
                state=MountState.SHUTTING_DOWN,
                backingRepoPath=None,
            ),
            MountInfo(
                mountPoint=b"/data/users/johndoe/apache",
                edenClientPath=b"/home/johndoe/.eden/clients/apache",
                state=MountState.RUNNING,
                backingRepoPath=b"/home/johndoe/eden-repos/apache",
            ),
            MountInfo(
                mountPoint=b"/data/users/johndoe/configs",
                edenClientPath=b"/home/johndoe/.eden/clients/configs",
                state=MountState.INITIALIZING,
            ),
        ]
        instance = EdenInstance(
            config_dir="/home/johndoe/.eden",
            etc_eden_dir="/etc/eden",
            home_dir="/home/johndoe",
        )

        checkout1 = EdenCheckout(
            instance,
            Path("/data/users/johndoe/mercurial"),
            Path("/home/johndoe/.eden/clients/mercurial"),
        )
        checkout1.set_config(
            CheckoutConfig(
                # note the backing repo is never expected to be different in the
                # daemon and client, but for the sake of testing that the
                # backing repo will be taken from the daemon we make them
                # different
                backing_repo=Path("/home/johndoe/eden-repos/mercurial1"),
                scm_type="hg",
                guid="123",
                mount_protocol="fuse",
                case_sensitive=False,
                require_utf8_path=True,
                default_revision=DEFAULT_REVISION["hg"],
                redirections={},
                active_prefetch_profiles=[],
                enable_tree_overlay=False,
            )
        )

        checkout2 = EdenCheckout(
            instance,
            Path("/data/users/johndoe/git"),
            Path("/home/johndoe/.eden/clients/git"),
        )
        checkout2.set_config(
            CheckoutConfig(
                backing_repo=Path("/home/johndoe/eden-repos/git"),
                scm_type="git",
                guid="456",
                mount_protocol="fuse",
                case_sensitive=False,
                require_utf8_path=True,
                default_revision=DEFAULT_REVISION["git"],
                redirections={},
                active_prefetch_profiles=[],
                enable_tree_overlay=False,
            )
        )

        config_checkouts = [
            checkout1,
            checkout2,
        ]

        mounts = EdenInstance._combine_mount_info(thrift_mounts, config_checkouts)

        normal_out = TestOutput()
        main_mod.ListCmd.print_mounts(normal_out, mounts)
        self.assertEqual(
            """\
/data/users/johndoe/apache (unconfigured)
/data/users/johndoe/configs (INITIALIZING) (unconfigured)
/data/users/johndoe/git (SHUTTING_DOWN)
/data/users/johndoe/mercurial
""",
            normal_out.getvalue(),
        )

        json_out = TestOutput()
        main_mod.ListCmd.print_mounts_json(json_out, mounts)
        self.assertEqual(
            """\
{
  "/data/users/johndoe/apache": {
    "backing_repo": "/home/johndoe/eden-repos/apache",
    "configured": false,
    "data_dir": "/home/johndoe/.eden/clients/apache",
    "state": "RUNNING"
  },
  "/data/users/johndoe/configs": {
    "backing_repo": null,
    "configured": false,
    "data_dir": "/home/johndoe/.eden/clients/configs",
    "state": "INITIALIZING"
  },
  "/data/users/johndoe/git": {
    "backing_repo": "/home/johndoe/eden-repos/git",
    "configured": true,
    "data_dir": "/home/johndoe/.eden/clients/git",
    "state": "SHUTTING_DOWN"
  },
  "/data/users/johndoe/mercurial": {
    "backing_repo": "/home/johndoe/eden-repos/mercurial",
    "configured": true,
    "data_dir": "/home/johndoe/.eden/clients/mercurial",
    "state": "RUNNING"
  }
}
""",
            json_out.getvalue(),
        )
