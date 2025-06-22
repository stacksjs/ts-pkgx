/**
 * **sqlfluff.com** - Package from pantry: sqlfluff.com
 *
 * @domain `sqlfluff.com`
 *
 * @install `launchpad install sqlfluff.com`
 * @dependencies `python.org>=3.7<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sqlfluffcom
 * console.log(pkg.name)        // "sqlfluff.com"
 * console.log(pkg.description) // "Package from pantry: sqlfluff.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sqlfluff-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sqlfluffcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'sqlfluff.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sqlfluff.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sqlfluff.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sqlfluff.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +sqlfluff.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sqlfluff.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.7<3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sqlfluff.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SqlfluffcomPackage = typeof sqlfluffcomPackage
