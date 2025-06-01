/**
 * **tcsh.org** - Crafters of fine Open Source products
 *
 * @domain `tcsh.org`
 *
 * @install `pkgx tcsh.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tcshorg
 * console.log(pkg.name)        // "tcsh.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tcsh-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tcshorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'tcsh.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/tcsh.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tcsh.org' as const,
  fullPath: 'tcsh.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tcsh.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TcshorgPackage = typeof tcshorgPackage
