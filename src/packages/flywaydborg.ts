/**
 * **flyway** - Database version control to control migrations
 *
 * @domain `flywaydb.org`
 * @programs `flyway`
 * @version `11.8.2` (41 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install flyway`
 * @aliases `flyway`
 * @dependencies `openjdk.org^21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.flyway
 * // Or access via domain
 * const samePkg = pantry.flywaydborg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "flywaydb.org"
 * console.log(pkg.description) // "Database version control to control migrations"
 * console.log(pkg.programs)    // ["flyway"]
 * console.log(pkg.versions[0]) // "11.8.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/flywaydb-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const flywayPackage = {
  /**
   * The display name of this package.
   */
  name: 'flywaydb.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'flywaydb.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Database version control to control migrations' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/flywaydb.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install flyway' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'flyway',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org^21',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '11.8.2',
    '11.8.1',
    '11.8.0',
    '11.7.2',
    '11.7.1',
    '11.7.0',
    '11.6.0',
    '11.5.0',
    '11.4.1',
    '11.4.0',
    '11.3.4',
    '11.3.3',
    '11.3.2',
    '11.3.1',
    '11.3.0',
    '11.2.0',
    '11.1.1',
    '11.1.0',
    '11.0.1',
    '11.0.0',
    '10.22.0',
    '10.21.0',
    '10.20.1',
    '10.20.0',
    '10.19.0',
    '10.18.2',
    '10.18.1',
    '10.18.0',
    '10.17.3',
    '10.17.2',
    '10.17.1',
    '10.17.0',
    '10.16.0',
    '10.15.2',
    '10.15.0',
    '10.14.0',
    '10.13.0',
    '10.12.0',
    '10.11.1',
    '10.11.0',
    '10.10.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'flyway',
  ] as const,
}

export type FlywayPackage = typeof flywayPackage
