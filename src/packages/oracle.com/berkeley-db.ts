/**
 * **berkeley-db** - Package from pantry: oracle.com/berkeley-db
 *
 * @domain `oracle.com/berkeley-db`
 *
 * @install `launchpad install oracle.com/berkeley-db`
 * @dependencies `openssl.org^1.1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.oraclecomberkeleydb
 * console.log(pkg.name)        // "berkeley-db"
 * console.log(pkg.description) // "Package from pantry: oracle.com/berkeley-db"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/oracle-com/berkeley-db.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const oraclecomberkeleydbPackage = {
  /**
   * The display name of this package.
   */
  name: 'berkeley-db' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'oracle.com/berkeley-db' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: oracle.com/berkeley-db' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install oracle.com/berkeley-db' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +oracle.com/berkeley-db -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install oracle.com/berkeley-db' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/oracle.com/berkeley-db/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OraclecomberkeleydbPackage = typeof oraclecomberkeleydbPackage
