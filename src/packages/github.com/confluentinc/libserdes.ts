/**
 * **confluentinc/libserdes** - Avro Serialization/Deserialization C/C++ library with Confluent schema-registry support
 *
 * @domain `github.com/confluentinc/libserdes`
 * @version `7.5.2.231027084844` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/confluentinc/libserdes -- $SHELL -i`
 * @aliases `confluentinc/libserdes`
 * @dependencies `apache.org/avro`, `digip.org/jansson`, `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.confluentinclibserdes
 * // Or access via domain
 * const samePkg = pantry.githubcomconfluentinclibserdes
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/confluentinc/libserdes"
 * console.log(pkg.description) // "Avro Serialization/Deserialization C/C++ librar..."
 * console.log(pkg.versions[0]) // "7.5.2.231027084844" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/confluentinc/libserdes.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const confluentinclibserdesPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/confluentinc/libserdes' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/confluentinc/libserdes' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Avro Serialization/Deserialization C/C++ library with Confluent schema-registry support' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/confluentinc/libserdes/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/confluentinc/libserdes -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'apache.org/avro',
    'digip.org/jansson',
    'curl.se',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.5.2.231027084844',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'confluentinc/libserdes',
  ] as const,
  fullPath: 'github.com/confluentinc/libserdes' as const,
}

export type ConfluentinclibserdesPackage = typeof confluentinclibserdesPackage
