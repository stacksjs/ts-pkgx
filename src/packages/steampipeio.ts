/**
 * **steampipe** - Zero-ETL, infinite possibilities. Live query APIs, code & more with SQL. No DB required.
 *
 * @domain `steampipe.io`
 * @programs `steampipe`
 * @version `2.1.0` (37 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install steampipe`
 * @name `steampipe`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.steampipe
 * // Or access via domain
 * const samePkg = pantry.steampipeio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "steampipe"
 * console.log(pkg.description) // "Zero-ETL, infinite possibilities. Live query AP..."
 * console.log(pkg.programs)    // ["steampipe"]
 * console.log(pkg.versions[0]) // "2.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/steampipe-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const steampipePackage = {
  /**
   * The display name of this package.
   */
  name: 'steampipe' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'steampipe.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Zero-ETL, infinite possibilities. Live query APIs, code & more with SQL. No DB required.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/steampipe.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install steampipe' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'steampipe',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.1.0',
    '2.0.1',
    '2.0.0',
    '1.2.0',
    '1.1.4',
    '1.1.3',
    '1.1.2',
    '1.1.1',
    '1.1.0',
    '1.0.3',
    '1.0.2',
    '1.0.1',
    '1.0.0',
    '0.24.2',
    '0.24.1',
    '0.24.0',
    '0.23.5',
    '0.23.4',
    '0.23.3',
    '0.23.2',
    '0.23.1',
    '0.23.0',
    '0.22.2',
    '0.22.1',
    '0.22.0',
    '0.21.8',
    '0.21.7',
    '0.21.6',
    '0.21.5',
    '0.21.4',
    '0.21.3',
    '0.21.2',
    '0.21.1',
    '0.21.0',
    '0.20.12',
    '0.20.11',
    '0.20.10',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) steampipe -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install steampipe' as const,
}

export type SteampipePackage = typeof steampipePackage
