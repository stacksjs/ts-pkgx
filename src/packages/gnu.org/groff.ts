/**
 * **groff** - Package from pantry: gnu.org/groff
 *
 * @domain `gnu.org/groff`
 *
 * @install `launchpad install gnu.org/groff`
 * @dependencies `ghostscript.com`, `netpbm.sourceforge.net`, `github.com/rrthomas/psutils`, ... (+3 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorggroff
 * console.log(pkg.name)        // "groff"
 * console.log(pkg.description) // "Package from pantry: gnu.org/groff"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/groff.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorggroffPackage = {
  /**
   * The display name of this package.
   */
  name: 'groff' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/groff' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/groff' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/groff' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/groff -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/groff' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'ghostscript.com',
    'netpbm.sourceforge.net',
    'github.com/rrthomas/psutils',
    'freedesktop.org/uchardet',
    'perl.org',
    'linux:gnome.org/glib',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/groff/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorggroffPackage = typeof gnuorggroffPackage
