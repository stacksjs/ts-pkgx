/**
 * **gnuplot.info** - Package from pantry: gnuplot.info
 *
 * @domain `gnuplot.info`
 *
 * @install `launchpad install gnuplot.info`
 * @dependencies `libgd.github.io`, `lua.org`, `gnome.org/pango`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuplotinfo
 * console.log(pkg.name)        // "gnuplot.info"
 * console.log(pkg.description) // "Package from pantry: gnuplot.info"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnuplot-info.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuplotinfoPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnuplot.info' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnuplot.info' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnuplot.info' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnuplot.info' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnuplot.info -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnuplot.info' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'libgd.github.io',
    'lua.org',
    'gnome.org/pango',
    'gnu.org/readline',
    'linux:github.com/AOMediaCodec/libavif^0.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnuplot.info/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuplotinfoPackage = typeof gnuplotinfoPackage
