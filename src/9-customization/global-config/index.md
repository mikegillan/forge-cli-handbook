---
title: Global configuration
description: "If you want to be lazy, here are some tips"
keywords: "forge, forge-cli"
author: poulnzh
category: handbook
layout: documentation
tags:
  - forge
---

Global configuration refers to `~/.forgerc.yml` Custom configurations supported in the file. Some of these configurations can be specified through command line parameters. For detailed configuration item explanations, see the following `配置项`one period.
So how do you set up these configurations?

## forge config command

> Added in CLI v0.39.24

Of course, it can be edited directly `~/.forgerc.yml` File to modify but `CLI` In `0.39.24` Added in version `forge config` Command to configure these global variables.

### View current configuration items

```shell
$ forge config -l

allowMultiChain:    false
defaults:           false
npmRegistry:        https://registry.npmjs.org/
mirror:             https://releases.arcblockio.cn
moderatorSecretKey: cBqbHWmgCfpeG8HhtD6-KuKUP5vtxD8I91hQdE0P-znEiDyIVZpMSzpxDMW9Ejjar5ozlWFmdwooZSOz4odD7g
```

### View a certain configuration item

```shell
$ forge config mirror
https://releases.arcblockio.cn
```

### Setting configuration items

```terminal
$ forge config mirror
https://releases.arcblock.io/forge/0.39.2/forge_darwin_amd64.tgz

$ forge config mirror https://releases.arcblockio.cn

$ forge config mirror
https://releases.arcblockio.cn
```

## Configuration item

### allowMultiChain

Boolean (bool), whether to allow the creation of multiple chains.

Optional values:

- true: Allowed. In this case, multiple chains can be created locally for easy development and debugging. It is recommended to use it in a development environment.
- false: not allowed, in this case `CLI` Will be used `forge starter` To start the chain, the stability is better, it is recommended to use it in a production environment

Default: true

### configPath

String, custom `forge config` File location. If specified, `CLI` The configuration is read, in which case there is no need to explicitly create a chain, and subsequent operations can also be performed.

Default: not set

Command line arguments: -i, --config-path

### defaults

Boolean (bool), whether the interactive command appears to use the default value.

Default: false

Command line arguments: -d, --defaults

Optional values:

- true: When there is an interactive operation, the CLI will use the default value of the operation
- false: When there is an interactive operation, the CLI will prompt the developer to fill in the information

### mirror

String, custom image address. If set, download, install, etc. and `Forge` When release-related operations are performed, `CLI` The mirror address is used.

Default: not set

Command line arguments: -m, --mirror

### moderatorSecretKey

String, moderator private key (SK), if the administrator private key was not specified when the chain was created, and was not found in the system environment variables, the administrator private key automatically generated by Forge CLI will be stored In this configuration item.

Default: not set

### npmRegistry

String, custom `npm` Mirror address. If not set `CLI` Read by default `~/.npmrc` Configuration.

Default: not set

Command line arguments: -r, --npm-registry

### releaseDir

String, using the local disk as the Forge distribution download image. It is relatively infrequently used, and some may need to deploy and use the Forge CLI in a local area network. For specific usage reference [Here](../../11-forge-cli-in-production/deploy-in-intranet)

Default: not set

## example

```yml
# ~/.forgerc.yml

allowMultiChain: true
configPath: /tmp/test/forge_release.toml
defaults: false
mirror: https://releases.arcblockio.cn
moderatorSecretKey: BbGCbsZRQuk4bJbtK4-1ZqJc41YDQvIXZC2BDpC4pGdZS2ai83D8N-QM9p9_FBzsmMZD2o4HzmE6gLo6Lxqf2Q
npmRegistry: https://registry.npm.taobao.org
releaseDir: /path/to/release-dir
```
