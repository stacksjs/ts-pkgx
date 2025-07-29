/**
 * **kafka.apache.org** - Package from pantry: kafka.apache.org
 *
 * @domain `kafka.apache.org`
 *
 * @install `launchpad install kafka.apache.org`
 * @dependencies `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kafkaapacheorg
 * console.log(pkg.name)        // "kafka.apache.org"
 * console.log(pkg.description) // "Package from pantry: kafka.apache.org"
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
  description: 'Package from pantry: kafka.apache.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kafka.apache.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +kafka.apache.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kafka.apache.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kafka.apache.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KafkaapacheorgPackage = typeof kafkaapacheorgPackage
