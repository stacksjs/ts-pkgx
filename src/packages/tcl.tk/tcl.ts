/**
 * **tcl** - Package from pantry: tcl.tk/tcl
 *
 * @domain `tcl.tk/tcl`
 *
 * @install `launchpad install tcl.tk/tcl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tcltktcl
 * console.log(pkg.name)        // "tcl"
 * console.log(pkg.description) // "Package from pantry: tcl.tk/tcl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tcl-tk/tcl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tcltktclPackage = {
  /**
   * The display name of this package.
   */
  name: 'tcl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tcl.tk/tcl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: tcl.tk/tcl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tcl.tk/tcl' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tcl.tk/tcl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TcltktclPackage = typeof tcltktclPackage
