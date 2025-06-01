/**
 * **tcl.tk** - Go home.
 *
 * @domain `tcl.tk`
 *
 * @install `pkgx tcl.tk`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tcltk
 * console.log(pkg.name)        // "tcl.tk"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tcl-tk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tcltkPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/tcl.tk/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tcl.tk' as const,
  fullPath: 'tcl.tk' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tcl.tk' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TcltkPackage = typeof tcltkPackage
