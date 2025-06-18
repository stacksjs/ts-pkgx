/**
 * **gnuplot.info** - Package from pantry: gnuplot.info
 *
 * @domain `gnuplot.info`
 *
 * @install `launchpad install gnuplot.info`
 * @dependencies `libgd.github.io`, `lua.org`, `gnome.org/pango`, ... (+5 more)
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install gnuplot.info' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgd.github.io',
    'lua.org',
    'gnome.org/pango',
    'gnu.org/readline',
    'github.com/AOMediaCodec/libavif^0.11',
    'gnu.org/autoconf',
    'gnu.org/libtool',
    'freedesktop.org/pkg-config',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnuplot.info/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuplotinfoPackage = typeof gnuplotinfoPackage
