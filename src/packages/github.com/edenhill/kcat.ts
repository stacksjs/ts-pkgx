/**
 * **kcat** - Generic command line non-JVM Apache Kafka producer and consumer
 *
 * @domain `github.com/edenhill/kcat`
 * @programs `kcat`
 * @version `1.7.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install kcat`
 * @name `kcat`
 * @dependencies `apache.org/avro`, `github.com/confluentinc/librdkafka`, `github.com/confluentinc/libserdes`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.kcat
 * // Or access via domain
 * const samePkg = pantry.githubcomedenhillkcat
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kcat"
 * console.log(pkg.description) // "Generic command line non-JVM Apache Kafka produ..."
 * console.log(pkg.programs)    // ["kcat"]
 * console.log(pkg.versions[0]) // "1.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/edenhill/kcat.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kcatPackage = {
  /**
   * The display name of this package.
   */
  name: 'kcat' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/edenhill/kcat' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Generic command line non-JVM Apache Kafka producer and consumer' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/edenhill/kcat/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install kcat' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'kcat',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'apache.org/avro',
    'github.com/confluentinc/librdkafka',
    'github.com/confluentinc/libserdes',
    'lloyd.github.io/yajl',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.7.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type KcatPackage = typeof kcatPackage
