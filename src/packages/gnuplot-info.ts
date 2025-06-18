/**
 * **gnuplot** - Command-driven, interactive function plotting
 *
 * @domain `gnuplot.info`
 * @programs `gnuplot`
 * @version `6.0.3` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) gnuplot`
 * @name `gnuplot`
 * @dependencies `libgd.github.io`, `lua.org`, `gnome.org/pango`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gnuplot
 * // Or access via domain
 * const samePkg = pantry.gnuplotinfo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnuplot"
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
  name: 'gnuplot' as const,
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
  installCommand: 'sh <(curl https://pkgx.sh) gnuplot' as const,
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
    'linuxgithub.com/AOMediaCodec/libavif^0.11',
    'github.com/AOMediaCodec/libavif^0.11',
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
  aliases: [] as const,
  fullPath: 'gnuplot' as const,
}

export type GnuplotPackage = typeof gnuplotPackage
