/**
 * **tcl-lang.org** - Crafters of fine Open Source products
 *
 * @domain `tcl-lang.org`
 *
 * @install `pkgx tcl-lang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tcllangorg
 * console.log(pkg.name)        // "tcl-lang.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tcl-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tcllangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'tcl-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/tcl-lang.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tcl-lang.org' as const,
  fullPath: 'tcl-lang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tcl-lang.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TcllangorgPackage = typeof tcllangorgPackage
