/**
 * **plotutils** - C/C++ function library for exporting 2-D vector graphics
 *
 * @domain `gnu.org/plotutils`
 * @programs `double`, `graph`, `ode`, `pic2plot`, `plot`, ... (+3 more)
 * @version `2.6.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/plotutils.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/plotutils -- $SHELL -i`
 * @aliases `plotutils`
 * @dependencies `libpng.org^1.6`, `libraw.org^0.21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.plotutils
 * // Or access via domain
 * const samePkg = pantry.gnuorgplotutils
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/plotutils"
 * console.log(pkg.description) // "C/C++ function library for exporting 2-D vector..."
 * console.log(pkg.programs)    // ["double", "graph", ...]
 * console.log(pkg.versions[0]) // "2.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/plotutils.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const plotutilsPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/plotutils' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/plotutils' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'C/C++ function library for exporting 2-D vector graphics' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/plotutils/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/plotutils -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'double',
    'graph',
    'ode',
    'pic2plot',
    'plot',
    'plotfont',
    'spline',
    'tek2plot',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libpng.org^1.6',
    'libraw.org^0.21',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.6.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'plotutils',
  ] as const,
  fullPath: 'gnu.org/plotutils' as const,
}

export type PlotutilsPackage = typeof plotutilsPackage
