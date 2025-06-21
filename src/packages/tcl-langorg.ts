/**
 * **tcl-lang.org** - Package from pantry: tcl-lang.org
 *
 * @domain `tcl-lang.org`
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
 * console.log(pkg.description) // "Package from pantry: tcl-lang.org"
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
  description: 'Package from pantry: tcl-lang.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tcl-lang.org' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tcl-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TcllangorgPackage = typeof tcllangorgPackage
