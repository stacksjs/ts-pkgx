/**
 * **postgrest** - Serves a fully RESTful API from any existing PostgreSQL database
 *
 * @domain `postgrest.org`
 * @programs `postgrest`
 * @version `13.0.7` (18 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install postgrest`
 * @name `postgrest`
 * @dependencies `postgresql.org/libpq@17`, `zlib.net~1.3`, `gnu.org/gcc/libstdcxx@14`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.postgrest
 * // Or access via domain
 * const samePkg = pantry.postgrestorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "postgrest"
 * console.log(pkg.description) // "Serves a fully RESTful API from any existing Po..."
 * console.log(pkg.programs)    // ["postgrest"]
 * console.log(pkg.versions[0]) // "13.0.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/postgrest-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const postgrestPackage = {
  /**
   * The display name of this package.
   */
  name: 'postgrest' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'postgrest.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Serves a fully RESTful API from any existing PostgreSQL database' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/postgrest.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install postgrest' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'postgrest',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'postgresql.org/libpq@17',
    'zlib.net~1.3',
    'gnu.org/gcc/libstdcxx@14',
    'gnome.org/libxml2~2.13 # 2.14 changes library api version',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '13.0.7',
    '13.0.6',
    '13.0.5',
    '13.0.4',
    '13.0.3',
    '13.0.2',
    '13.0.1',
    '13.0.0',
    '12.2.12',
    '12.2.11',
    '12.2.10',
    '12.2.9',
    '12.2.8',
    '12.2.7',
    '12.2.6',
    '12.2.5',
    '12.2.4',
    '12.2.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) postgrest -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install postgrest' as const,
}

export type PostgrestPackage = typeof postgrestPackage
