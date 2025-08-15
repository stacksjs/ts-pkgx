/**
 * **tcl-lang.org** - Tool Command Language
 *
 * @domain `tcl-lang.org`
 * @programs `tclsh`, `wish`, `critcl`
 * @version `9.0.2` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tcl-lang.org`
 * @dependencies `openssl.org^1.1`, `zlib.net^1.3`, `freetype.org^2`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tcllangorg
 * console.log(pkg.name)        // "tcl-lang.org"
 * console.log(pkg.description) // "Tool Command Language"
 * console.log(pkg.programs)    // ["tclsh", "wish", ...]
 * console.log(pkg.versions[0]) // "9.0.2" (latest)
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
   * The canonical domain name for this package.
   */
  domain: 'tcl-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Tool Command Language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tcl-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tcl-lang.org' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tclsh',
    'wish',
    'critcl',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'zlib.net^1.3',
    'freetype.org^2',
    'freedesktop.org/pkg-config^0.29',
    'x.org/x11=1.8.11',
    'x.org/exts^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '9.0.2',
    '9.0.1',
    '9.0.0',
    '8.6.17',
    '8.6.16',
    '8.6.15',
    '8.6.14',
    '8.6.13',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +tcl-lang.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install tcl-lang.org' as const,
}

export type TcllangorgPackage = typeof tcllangorgPackage
