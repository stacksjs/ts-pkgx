/**
 * **kafka.apache.org** - Crafters of fine Open Source products
 *
 * @domain `kafka.apache.org`
 *
 * @install `pkgx kafka.apache.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kafkaapacheorg
 * console.log(pkg.name)        // "kafka.apache.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
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
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/kafka.apache.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kafka.apache.org' as const,
  fullPath: 'kafka.apache.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx kafka.apache.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KafkaapacheorgPackage = typeof kafkaapacheorgPackage
