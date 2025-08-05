/**
 * **expect** - Package from pantry: tcl-lang.org/expect
 *
 * @domain `tcl-lang.org/expect`
 *
 * @install `launchpad install tcl-lang.org/expect`
 * @dependencies `tcl.tk/tcl^8`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tcllangorgexpect
 * console.log(pkg.name)        // "expect"
 * console.log(pkg.description) // "Package from pantry: tcl-lang.org/expect"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tcl-lang-org/expect.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tcllangorgexpectPackage = {
  /**
   * The display name of this package.
   */
  name: 'expect' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tcl-lang.org/expect' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: tcl-lang.org/expect' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tcl-lang.org/expect' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +tcl-lang.org/expect -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install tcl-lang.org/expect' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'tcl.tk/tcl^8',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tcl-lang.org/expect/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TcllangorgexpectPackage = typeof tcllangorgexpectPackage
