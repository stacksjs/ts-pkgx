/**
 * **duckdb.org** - Package from pantry: duckdb.org
 *
 * @domain `duckdb.org`
 *
 * @install `launchpad install duckdb.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.duckdborg
 * console.log(pkg.name)        // "duckdb.org"
 * console.log(pkg.description) // "Package from pantry: duckdb.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/duckdb-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const duckdborgPackage = {
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
  description: 'Package from pantry: duckdb.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install duckdb.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +duckdb.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install duckdb.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/duckdb.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DuckdborgPackage = typeof duckdborgPackage
