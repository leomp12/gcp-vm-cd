# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
