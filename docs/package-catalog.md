# Package Catalog

This page lists all packages available in ts-pkgx, organized by category.

Each package can be accessed using `getPackage(name)` or directly via `pantry[domain]`.

## Table of Contents

- [Programming Languages](#programming-languages)
- [Runtimes & Development Tools](#runtimes-development-tools)
- [Databases](#databases)
- [DevOps & Cloud](#devops-cloud)
- [Utilities](#utilities)

## Programming Languages

| Package | Description | Programs | Aliases |
|---------|-------------|----------|--------|

## Runtimes & Development Tools

| Package | Description | Programs | Aliases |
|---------|-------------|----------|--------|

## Databases

| Package | Description | Programs | Aliases |
|---------|-------------|----------|--------|

## DevOps & Cloud

| Package | Description | Programs | Aliases |
|---------|-------------|----------|--------|

## Utilities

| Package | Description | Programs | Aliases |
|---------|-------------|----------|--------|
| **bunsh** | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one | bun, bunx | - |
| **dartdev** | The Dart SDK, including the VM, JS and Wasm compilers, analysis, core libraries, and more. | dart, dartaotruntime | - |
| **denoland** | A modern runtime for JavaScript and TypeScript. | deno | - |
| **godev** | The Go programming language | go, gofmt | - |
| **mongodbcom** | The MongoDB Database | install_compass, mongod, mongos | - |
| **mozillaorg** |  | - | - |
| **mysqlcom** | MySQL Server, the world's most popular open source database, and MySQL Cluster, a real-time, open source transactional database. | mysql_client_test, my_print_defaults, myisam_ftdump, ... (28 more) | - |
| **nginxorg** | HTTP(S) server and reverse proxy, and IMAP/POP3 proxy server | nginx | - |
| **nodejsorg** | Platform built on V8 to build network applications | node | - |
| **phpnet** | General-purpose scripting language | pear, pecl, phar, ... (5 more) | - |
| **postgresqlorg** | Mirror of the official PostgreSQL GIT repository. Note that this is just a *mirror* - we don't work with pull requests on github. To contribute, please see https://wiki.postgresql.org/wiki/Submitting_a_Patch | clusterdb, createdb, dropdb, ... (25 more) | - |
| **pythonorg** | The Python programming language | python, python{{ version.major }}, python{{ version.marketing }} | - |
| **redisio** | Redis is an in-memory database that persists on disk. The data model is key-value, but many different kind of values are supported: Strings, Lists, Sets, Sorted Sets, Hashes, Streams, HyperLogLogs, Bitmaps. | redis-server, redis-cli, redis-benchmark | - |
| **rubylangorg** | Powerful, clean, object-oriented scripting language | erb, irb, rake, ... (3 more) | - |
| **rustlangorg** | Empowering everyone to build reliable and efficient software. | cargo-clippy, cargo-fmt, clippy-driver, ... (7 more) | - |

## Usage Examples

```typescript
import { getPackage, pantry } from 'ts-pkgx/packages'

// Get a package by domain
const nodePackage = pantry['nodejs.org']

// Get a package by alias
const nodeByAlias = getPackage('node')

// Access package properties
console.log(`Package: ${nodePackage.name} - ${nodePackage.description}`)
console.log(`Install: ${nodePackage.installCommand}`)
console.log(`Programs: ${nodePackage.programs.join(', ')}`)
```
