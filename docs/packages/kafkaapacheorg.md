# kafka.apache.org

> Mirror of Apache Kafka

## Package Information

- **Domain**: `kafkaapacheorg`
- **Name**: `kafka.apache.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/kafka.apache.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +kafka.apache.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `connect-distributed.sh`
- `connect-mirror-maker.sh`
- `connect-plugin-path.sh`
- `connect-standalone.sh`
- `kafka-acls.sh`
- `kafka-broker-api-versions.sh`
- `kafka-client-metrics.sh`
- `kafka-cluster.sh`
- `kafka-configs.sh`
- `kafka-console-consumer.sh`
- `kafka-console-producer.sh`
- `kafka-consumer-groups.sh`
- `kafka-consumer-perf-test.sh`
- `kafka-delegation-tokens.sh`
- `kafka-delete-records.sh`
- `kafka-dump-log.sh`
- `kafka-e2e-latency.sh`
- `kafka-features.sh`
- `kafka-get-offsets.sh`
- `kafka-jmx.sh`
- `kafka-leader-election.sh`
- `kafka-log-dirs.sh`
- `kafka-metadata-quorum.sh`
- `kafka-metadata-shell.sh`
- `kafka-producer-perf-test.sh`
- `kafka-reassign-partitions.sh`
- `kafka-replica-verification.sh`
- `kafka-run-class.sh`
- `kafka-server-start.sh`
- `kafka-server-stop.sh`
- `kafka-storage.sh`
- `kafka-streams-application-reset.sh`
- `kafka-topics.sh`
- `kafka-transactions.sh`
- `kafka-verifiable-consumer.sh`
- `kafka-verifiable-producer.sh`
- `trogdor.sh`
- `zookeeper-security-migration.sh`
- `zookeeper-server-start.sh`
- `zookeeper-server-stop.sh`
- `zookeeper-shell.sh`

## Aliases

This package can also be accessed using these aliases:

- `+kafka.apache.org -- $SHELL -i`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `4.0.0`, `3.9.1`, `3.9.0`, `3.8.1`, `3.8.0`
- `3.7.2`

</details>

**Latest Version**: `4.0.0`

### Install Specific Version

```bash
# Install specific version
pkgx kafka.apache.org@4.0.0
```

## Dependencies

This package depends on:

- `openjdk.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.kafkaapacheorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/kafka.apache.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
