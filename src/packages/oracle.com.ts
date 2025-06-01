/**
 * **oracle.com** - Go home.
 *
 * @domain `oracle.com`
 *
 * @install `pkgx oracle.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.oraclecom
 * console.log(pkg.name)        // "oracle.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/oracle-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const oraclecomPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/oracle.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'oracle.com' as const,
  fullPath: 'oracle.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx oracle.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OraclecomPackage = typeof oraclecomPackage
