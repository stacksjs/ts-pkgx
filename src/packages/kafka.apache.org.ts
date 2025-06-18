/**
 * **kafka.apache.org** - Mirror of Apache Kafka
 *
 * @domain `kafka.apache.org`
 * @programs `connect-distributed.sh`, `connect-mirror-maker.sh`, `connect-plugin-path.sh`, `connect-standalone.sh`, `kafka-acls.sh`, ... (+36 more)
 * @version `4.0.0` (6 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/kafka-apache-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +kafka.apache.org -- $SHELL -i`
 * @dependencies `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kafkaapacheorg
 * console.log(pkg.name)        // "kafka.apache.org"
 * console.log(pkg.description) // "Mirror of Apache Kafka"
 * console.log(pkg.programs)    // ["connect-distributed.sh", "connect-mirror-maker.sh", ...]
 * console.log(pkg.versions[0]) // "4.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kafka-apache-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kafkaapacheorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'kafka.apache.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kafka.apache.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Mirror of Apache Kafka' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kafka.apache.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +kafka.apache.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'connect-distributed.sh',
    'connect-mirror-maker.sh',
    'connect-plugin-path.sh',
    'connect-standalone.sh',
    'kafka-acls.sh',
    'kafka-broker-api-versions.sh',
    'kafka-client-metrics.sh',
    'kafka-cluster.sh',
    'kafka-configs.sh',
    'kafka-console-consumer.sh',
    'kafka-console-producer.sh',
    'kafka-consumer-groups.sh',
    'kafka-consumer-perf-test.sh',
    'kafka-delegation-tokens.sh',
    'kafka-delete-records.sh',
    'kafka-dump-log.sh',
    'kafka-e2e-latency.sh',
    'kafka-features.sh',
    'kafka-get-offsets.sh',
    'kafka-jmx.sh',
    'kafka-leader-election.sh',
    'kafka-log-dirs.sh',
    'kafka-metadata-quorum.sh',
    'kafka-metadata-shell.sh',
    'kafka-producer-perf-test.sh',
    'kafka-reassign-partitions.sh',
    'kafka-replica-verification.sh',
    'kafka-run-class.sh',
    'kafka-server-start.sh',
    'kafka-server-stop.sh',
    'kafka-storage.sh',
    'kafka-streams-application-reset.sh',
    'kafka-topics.sh',
    'kafka-transactions.sh',
    'kafka-verifiable-consumer.sh',
    'kafka-verifiable-producer.sh',
    'trogdor.sh',
    'zookeeper-security-migration.sh',
    'zookeeper-server-start.sh',
    'zookeeper-server-stop.sh',
    'zookeeper-shell.sh',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.0.0',
    '3.9.1',
    '3.9.0',
    '3.8.1',
    '3.8.0',
    '3.7.2',
  ] as const,
  aliases: [] as const,
  fullPath: 'kafka.apache.org' as const,
}

export type KafkaapacheorgPackage = typeof kafkaapacheorgPackage
