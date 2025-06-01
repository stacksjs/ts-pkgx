/**
 * **sqlite3** - Official Git mirror of the SQLite source tree
 *
 * @domain `sqlite.org`
 * @programs `sqlite3`
 * @version `3.50.0` (25 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/sqlite-org.md
 *
 * @install `sh <(curl https://pkgx.sh) sqlite3`
 * @aliases `sqlite3`
 * @dependencies `zlib.net@1`, `gnu.org/readline@8`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.sqlite3
 * // Or access via domain
 * const samePkg = pantry.sqliteorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sqlite3"
 * console.log(pkg.description) // "Official Git mirror of the SQLite source tree"
 * console.log(pkg.programs)    // ["sqlite3"]
 * console.log(pkg.versions[0]) // "3.50.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sqlite-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sqlite3Package = {
  /**
   * The display name of this package.
   */
  name: 'sqlite3' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sqlite.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Official Git mirror of the SQLite source tree' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sqlite.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) sqlite3' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sqlite3',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net@1',
    'gnu.org/readline@8',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.50.0',
    '3.49.2',
    '3.49.1',
    '3.49.0',
    '3.48.0',
    '3.47.2',
    '3.47.1',
    '3.47.0',
    '3.46.1',
    '3.46.0',
    '3.45.3',
    '3.45.2',
    '3.45.1',
    '3.45.0',
    '3.44.4',
    '3.44.3',
    '3.44.2',
    '3.44.1',
    '3.44.0',
    '3.43.2',
    '3.43.1',
    '3.43.0',
    '3.42.0',
    '3.40.0',
    '3.39.4',
  ] as const,
  fullPath: 'sqlite.org' as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'sqlite3',
  ] as const,
}

export type Sqlite3Package = typeof sqlite3Package
