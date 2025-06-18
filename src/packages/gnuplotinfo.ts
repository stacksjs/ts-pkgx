/**
 * **gnuplot** - Command-driven, interactive function plotting
 *
 * @domain `gnuplot.info`
 * @programs `gnuplot`
 * @version `6.0.3` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gnuplot`
 * @aliases `gnuplot`
 * @dependencies `libgd.github.io`, `lua.org`, `gnome.org/pango`, ... (+5 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gnuplot
 * // Or access via domain
 * const samePkg = pantry.gnuplotinfo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnuplot.info"
 * console.log(pkg.description) // "Command-driven, interactive function plotting"
 * console.log(pkg.programs)    // ["gnuplot"]
 * console.log(pkg.versions[0]) // "6.0.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnuplot-info.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuplotPackage = {
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
  description: 'Command-driven, interactive function plotting' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnuplot.info/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install gnuplot' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gnuplot',
  ] as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.0.3',
    '6.0.2',
    '6.0.1',
    '6.0.0',
    '5.4.10',
    '5.4.9',
    '5.4.8',
    '5.4.7',
    '5.4.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gnuplot',
  ] as const,
}

export type GnuplotPackage = typeof gnuplotPackage
