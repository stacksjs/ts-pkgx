/**
 * **oracle.com/berkeley-db** - pkgx package
 *
 * @domain `oracle.com/berkeley/db`
 *
 * @install `pkgx oracle.com/berkeley-db`
 * @name `berkeley-db`
 * @aliases `oracle.com/berkeley-db`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.oraclecomberkeleydb
 * // Or access via domain
 * const samePkg = pantry.oraclecomberkeleydb
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "berkeley-db"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/oracle-com/berkeley/db.md
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
  domain: 'oracle.com/berkeley/db' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx oracle.com/berkeley-db' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'oracle.com/berkeley-db',
  ] as const,
  fullPath: 'oracle.com/berkeley-db' as const,
}

export type OraclecomberkeleydbPackage = typeof oraclecomberkeleydbPackage
