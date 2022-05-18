# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.3.10](https://github.com/leomp12/gcp-vms-cd/compare/v0.3.9...v0.3.10) (2022-05-18)


### Bug Fixes

* **deps:** update all non-major dependencies ([f0a04a1](https://github.com/leomp12/gcp-vms-cd/commit/f0a04a1fe2a9ee5c6e951980b0066dfdd39acce5))
* **subscription-options:** set expiration policy ttl to 93 days ([7b32dcd](https://github.com/leomp12/gcp-vms-cd/commit/7b32dcd4c12dfa4b261f34b74ce0231dd4648347))

### [0.3.9](https://github.com/leomp12/gcp-vms-cd/compare/v0.3.8...v0.3.9) (2022-02-13)


### Bug Fixes

* **deps:** update all non-major dependencies ([0bd0f6f](https://github.com/leomp12/gcp-vms-cd/commit/0bd0f6f825d739269eb7175ef053c3e7317b0f3a))
* **env:** ensure loading .env from process root dir ([dce8daa](https://github.com/leomp12/gcp-vms-cd/commit/dce8daaaf84340f293761ebcfbde46575329aad2))

### [0.3.8](https://github.com/leomp12/gcp-vms-cd/compare/v0.3.7...v0.3.8) (2021-12-03)


### Bug Fixes

* **logger:** replace undefined `logger.warning` to `logger.warn` ([408a0c4](https://github.com/leomp12/gcp-vms-cd/commit/408a0c43074cd3740fcff8b4a29897c86e732b0f))

### [0.3.7](https://github.com/leomp12/gcp-vms-cd/compare/v0.3.6...v0.3.7) (2021-12-03)


### Bug Fixes

* **subscription-watcher:** scheduled runs by restart command ([f7cbc7a](https://github.com/leomp12/gcp-vms-cd/commit/f7cbc7ac98b001aad3cdcf81d83f086a408421c3))

### [0.3.6](https://github.com/leomp12/gcp-vms-cd/compare/v0.3.5...v0.3.6) (2021-11-27)


### Bug Fixes

* **subscription-watcher:** properly manipulate last message timestamp ([77d19d8](https://github.com/leomp12/gcp-vms-cd/commit/77d19d8f244bb93a89eca326a5dbb68a7352772e))

### [0.3.5](https://github.com/leomp12/gcp-vms-cd/compare/v0.3.4...v0.3.5) (2021-11-26)


### Bug Fixes

* **logger:** add metadata formater ([028ae75](https://github.com/leomp12/gcp-vms-cd/commit/028ae757bd0fe63c640266045a53157c2766b06c))
* **run-pipeline:** fix checking test command ([5ccd39a](https://github.com/leomp12/gcp-vms-cd/commit/5ccd39a1532f41e317561eca151684a2ae5f8bcd))
* **subscription-watcher:** fix handling last message `publishTime` ([4b96d4a](https://github.com/leomp12/gcp-vms-cd/commit/4b96d4ab5b56261c091a00dafaf4ef7589d07bea))

### [0.3.4](https://github.com/leomp12/gcp-vms-cd/compare/v0.3.3...v0.3.4) (2021-11-26)


### Bug Fixes

* **logger:** debug metadata objects if any ([10e31b3](https://github.com/leomp12/gcp-vms-cd/commit/10e31b376873ceeb19fa13f6ea319f8476374976))
* **subscription-watcher:** prevent multiple runs on restart ([6475109](https://github.com/leomp12/gcp-vms-cd/commit/6475109e278c61c1fc608c182e3037db64976e78))

### [0.3.3](https://github.com/leomp12/gcp-vms-cd/compare/v0.3.2...v0.3.3) (2021-11-26)


### Bug Fixes

* **logger:** properly logging json messages ([87044fd](https://github.com/leomp12/gcp-vms-cd/commit/87044fd22f18136bfcc7d870df5d4bd0376056ff))

### [0.3.2](https://github.com/leomp12/gcp-vms-cd/compare/v0.3.1...v0.3.2) (2021-11-26)


### Features

* **gh-action:** setup composite action to trigger deploy with new pubsub message ([d78f839](https://github.com/leomp12/gcp-vms-cd/commit/d78f8392482c7785d06abbc7765131aecea402d8))
* **publish:** script to publish to pubsub vms cd topic ([561153d](https://github.com/leomp12/gcp-vms-cd/commit/561153d7549693c7912d56cc3bbbdaf295bf6ff2))


### Bug Fixes

* **gh-action:** add required `shell` property ([386d52b](https://github.com/leomp12/gcp-vms-cd/commit/386d52be51162d93f81eaa14d85d032528049447))
* **gh-action:** fix inputs and steps working directory ([b7e0067](https://github.com/leomp12/gcp-vms-cd/commit/b7e00674606de1b0fe2148c852b2120e7149e59c))
* **gh-action:** fix using `gcp_account_key` input ([c5884f2](https://github.com/leomp12/gcp-vms-cd/commit/c5884f25b089a0f76e5f0c9a241362f6a5ddb4c7))
* **publish:** fix `publishMessage` arguments ([cf4fe5d](https://github.com/leomp12/gcp-vms-cd/commit/cf4fe5d3eda1836a64c15ee0b073700624e544c9))
* **publish:** fix pubsub topic message payload ([fcd90b6](https://github.com/leomp12/gcp-vms-cd/commit/fcd90b64b92ab142a142921ef5e37e3c6a828195))
* **publish:** js syntax fix (await inside async) ([e8e5549](https://github.com/leomp12/gcp-vms-cd/commit/e8e5549218b307361c2428b64e55e0a9255d66d7))
* **run-pipeline:** do not exit with error on stderr ([6be16c2](https://github.com/leomp12/gcp-vms-cd/commit/6be16c258a4d88336b0126af927d7b0e514a2b35))

### [0.3.1](https://github.com/leomp12/gcp-vms-cd/compare/v0.3.0...v0.3.1) (2021-11-23)

## [0.3.0](https://github.com/leomp12/gcp-vms-cd/compare/v0.2.2...v0.3.0) (2021-11-23)


### Features

* **command-dir:** check event `commandWorkingDir` exists and set exec cwd ([00672ff](https://github.com/leomp12/gcp-vms-cd/commit/00672ff88225d3719badeff6f67eb168917ff09b))

### [0.2.2](https://github.com/leomp12/gcp-vms-cd/compare/v0.2.1...v0.2.2) (2021-11-23)


### Bug Fixes

* **logger:** fix all `logger.log` to `logger.info` ([3741b1a](https://github.com/leomp12/gcp-vms-cd/commit/3741b1ae34f6f900c6399ac40f3f42715d1bbb06))

### [0.2.1](https://github.com/leomp12/gcp-vms-cd/compare/v0.2.0...v0.2.1) (2021-11-23)


### Bug Fixes

* **logger:** logger for all levels ([f4a79de](https://github.com/leomp12/gcp-vms-cd/commit/f4a79de8b71794a0f81b519efc95965dc7c2cf04))
* **subscriber:** create pubsub subscriber with no expiration and ordered messages ([7f027ec](https://github.com/leomp12/gcp-vms-cd/commit/7f027ec5de93cc9d71e3daa0dc2ccc50b7e4c7e9))
* **subscriber:** try to fix pubsub subcriber options ([6dfe694](https://github.com/leomp12/gcp-vms-cd/commit/6dfe694086bb99d713b963517090ced95640963a))

## [0.2.0](https://github.com/leomp12/gcp-vms-cd/compare/v0.1.3...v0.2.0) (2021-11-23)


### Bug Fixes

* **pubsub-topic:** stop trying to (re)create topic ([5cefd7f](https://github.com/leomp12/gcp-vms-cd/commit/5cefd7f22f99bb65bdf998291d3f31194c797a8d))

### [0.1.3](https://github.com/leomp12/gcp-vms-cd/compare/v0.1.2...v0.1.3) (2021-11-23)


### Bug Fixes

* **pubsub-topic:** fix setting topic name ([bd7666c](https://github.com/leomp12/gcp-vms-cd/commit/bd7666cb05bd1d90ad541d8f8267ddc088c56a4b))

### [0.1.2](https://github.com/leomp12/gcp-vms-cd/compare/v0.1.1...v0.1.2) (2021-11-23)


### Bug Fixes

* **cjs:** fix requires keeping commonjs (exports) ([2264633](https://github.com/leomp12/gcp-vms-cd/commit/22646334b157fcb1a733eda6c39f7d60e557670d))

### [0.1.1](https://github.com/leomp12/gcp-vms-cd/compare/v0.1.0...v0.1.1) (2021-11-23)


### Bug Fixes

* **cjs:** fix requires keeping commonjs ([d2b8424](https://github.com/leomp12/gcp-vms-cd/commit/d2b842484bf91f3af173ecd410b264c85f3e1703))

## [0.1.0](https://github.com/leomp12/gcp-vms-cd/compare/v0.0.3...v0.1.0) (2021-11-22)


### Features

* **run-pipeline:** pull -> restart -> test (if any) ?-> revert (if failed) ([57ab0e3](https://github.com/leomp12/gcp-vms-cd/commit/57ab0e33e92c71e39c28a65d9ca7cdc4bfe2811e))

### [0.0.3](https://github.com/leomp12/gcp-vms-cd/compare/v0.0.2...v0.0.3) (2021-11-18)


### Features

* **logger:** setup winston logger instance ([984ab24](https://github.com/leomp12/gcp-vms-cd/commit/984ab24624e15438aafdeb477e6851a334865280))

### 0.0.2 (2021-11-17)


### Features

* **pubsub:** start handling pubsub subcsription ([68e39d6](https://github.com/leomp12/gcp-vms-cd/commit/68e39d6b7992d86a6bca6148e52ab1f9d660e16b))
* **pubsub:** start handling pubsub subcsription ([2ea40a3](https://github.com/leomp12/gcp-vms-cd/commit/2ea40a3825bebdaf605d694ae20d416352606bb1))
