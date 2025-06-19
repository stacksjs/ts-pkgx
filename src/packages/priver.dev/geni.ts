/**
 * **geni** - Standalone database migration tool which works for Postgres, MariaDB, MySQL, Sqlite and LibSQL(Turso).
 *
 * @domain `priver.dev/geni`
 * @programs `geni`
 * @version `2023.12.27` (33 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install geni`
 * @name `geni`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.geni
 * // Or access via domain
 * const samePkg = pantry.priverdevgeni
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "geni"
 * console.log(pkg.description) // "Standalone database migration tool which works ..."
 * console.log(pkg.programs)    // ["geni"]
 * console.log(pkg.versions[0]) // "2023.12.27" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/priver-dev/geni.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const geniPackage = {
  /**
   * The display name of this package.
   */
  name: 'geni' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'priver.dev/geni' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Standalone database migration tool which works for Postgres, MariaDB, MySQL, Sqlite and LibSQL(Turso).' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/priver.dev/geni/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install geni' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'geni',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2023.12.27',
    '1.1.6',
    '1.1.5',
    '1.1.4',
    '1.1.3',
    '1.1.2',
    '1.1.1',
    '1.1.0',
    '1.0.14',
    '1.0.13',
    '1.0.12',
    '1.0.11',
    '1.0.10',
    '1.0.9',
    '1.0.8',
    '1.0.7',
    '1.0.6',
    '1.0.5',
    '1.0.4',
    '1.0.3',
    '1.0.2',
    '1.0.1',
    '1.0.0',
    '0.0.11',
    '0.0.10',
    '0.0.9',
    '0.0.8',
    '0.0.7',
    '0.0.6',
    '0.0.5',
    '0.0.4',
    '0.0.3',
    '0.0.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type GeniPackage = typeof geniPackage
