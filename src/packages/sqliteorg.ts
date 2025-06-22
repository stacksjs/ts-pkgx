/**
 * **sqlite.org** - Package from pantry: sqlite.org
 *
 * @domain `sqlite.org`
 *
 * @install `launchpad install sqlite.org`
 * @dependencies `zlib.net@1`, `gnu.org/readline@8`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sqliteorg
 * console.log(pkg.name)        // "sqlite.org"
 * console.log(pkg.description) // "Package from pantry: sqlite.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sqlite-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sqliteorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'sqlite.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sqlite.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sqlite.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sqlite.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +sqlite.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sqlite.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net@1',
    'gnu.org/readline@8',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sqlite.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SqliteorgPackage = typeof sqliteorgPackage
