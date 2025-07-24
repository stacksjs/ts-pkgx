/**
 * **avro** - Apache Avro is a data serialization system.
 *
 * @domain `apache.org/avro`
 * @programs `avroappend`, `avrocat`, `avromod`, `avropipe`
 * @version `1.12.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install avro`
 * @name `avro`
 * @dependencies `digip.org/jansson`, `google.github.io/snappy`, `tukaani.org/xz`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.avro
 * // Or access via domain
 * const samePkg = pantry.apacheorgavro
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "avro"
 * console.log(pkg.description) // "Apache Avro is a data serialization system."
 * console.log(pkg.programs)    // ["avroappend", "avrocat", ...]
 * console.log(pkg.versions[0]) // "1.12.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apache-org/avro.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const avroPackage = {
  /**
   * The display name of this package.
   */
  name: 'avro' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apache.org/avro' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Apache Avro is a data serialization system.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/avro/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install avro' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'avroappend',
    'avrocat',
    'avromod',
    'avropipe',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'digip.org/jansson',
    'google.github.io/snappy',
    'tukaani.org/xz',
    'zlib.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.12.0',
    '1.11.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +apache.org/avro -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install avro' as const,
}

export type AvroPackage = typeof avroPackage
