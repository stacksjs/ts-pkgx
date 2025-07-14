/**
 * **postgrest.org** - Package from pantry: postgrest.org
 *
 * @domain `postgrest.org`
 *
 * @install `launchpad install postgrest.org`
 * @dependencies `postgresql.org/libpq@17`, `zlib.net~1.3`, `gnu.org/gcc/libstdcxx@14`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.postgrestorg
 * console.log(pkg.name)        // "postgrest.org"
 * console.log(pkg.description) // "Package from pantry: postgrest.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/postgrest-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const postgrestorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'postgrest.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'postgrest.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: postgrest.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install postgrest.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +postgrest.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install postgrest.org' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/postgrest.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PostgrestorgPackage = typeof postgrestorgPackage
