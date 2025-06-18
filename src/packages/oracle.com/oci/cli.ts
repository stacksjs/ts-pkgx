/**
 * **oracle.com/oci-cli** - pkgx package
 *
 * @domain `oracle.com/oci/cli`
 *
 * @install `pkgx oracle.com/oci-cli`
 * @name `oci-cli`
 * @aliases `oracle.com/oci-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.oraclecomocicli
 * // Or access via domain
 * const samePkg = pantry.oraclecomocicli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "oci-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/oracle-com/oci/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const oraclecomocicliPackage = {
  /**
   * The display name of this package.
   */
  name: 'oci-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'oracle.com/oci/cli' as const,
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
  installCommand: 'pkgx oracle.com/oci-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'oracle.com/oci-cli',
  ] as const,
  fullPath: 'oracle.com/oci-cli' as const,
}

export type OraclecomocicliPackage = typeof oraclecomocicliPackage
