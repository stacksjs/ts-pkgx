/**
 * **duckdb** - DuckDB is an analytical in-process SQL database management system
 *
 * @domain `duckdb.org`
 * @programs `duckdb`
 * @version `1.3.1` (20 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install duckdb`
 * @aliases `duckdb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.duckdb
 * // Or access via domain
 * const samePkg = pantry.duckdborg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "duckdb.org"
 * console.log(pkg.description) // "DuckDB is an analytical in-process SQL database..."
 * console.log(pkg.programs)    // ["duckdb"]
 * console.log(pkg.versions[0]) // "1.3.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/duckdb-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const duckdbPackage = {
  /**
   * The display name of this package.
   */
  name: 'duckdb.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'duckdb.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'DuckDB is an analytical in-process SQL database management system' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/duckdb.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install duckdb' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'duckdb',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.1',
    '1.3.0',
    '1.2.2',
    '1.2.1',
    '1.2.0',
    '1.1.3',
    '1.1.2',
    '1.1.1',
    '1.1.0',
    '1.0.0',
    '0.10.3',
    '0.10.2',
    '0.10.1',
    '0.10.0',
    '0.9.2',
    '0.9.1',
    '0.9.0',
    '0.8.1',
    '0.8.0',
    '0.7.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'duckdb',
  ] as const,
}

export type DuckdbPackage = typeof duckdbPackage
