/**
 * **fltk.org** - FLTK - Fast Light Tool Kit - https://github.com/fltk/fltk - cross platform GUI development
 *
 * @domain `fltk.org`
 * @programs `fluid`, `fltk-config`
 * @version `1.4.3` (6 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/fltk-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +fltk.org -- $SHELL -i`
 * @dependencies `libjpeg-turbo.org^2`, `libpng.org^1`, `linuxx.org/xft^2x.org/xt^1freedesktop.org/mesa-glu^9`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fltkorg
 * console.log(pkg.name)        // "fltk.org"
 * console.log(pkg.description) // "FLTK - Fast Light Tool Kit - https://github.com..."
 * console.log(pkg.programs)    // ["fluid", "fltk-config"]
 * console.log(pkg.versions[0]) // "1.4.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fltk-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fltkorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'fltk.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fltk.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'FLTK - Fast Light Tool Kit - https://github.com/fltk/fltk - cross platform GUI development' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fltk.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +fltk.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'fluid',
    'fltk-config',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libjpeg-turbo.org^2',
    'libpng.org^1',
    'linuxx.org/xft^2x.org/xt^1freedesktop.org/mesa-glu^9',
    'x.org/xft^2',
    'x.org/xt^1',
    'freedesktop.org/mesa-glu^9',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.4.3',
    '1.4.2',
    '1.4.1',
    '1.3.11',
    '1.3.10',
    '1.3.9',
  ] as const,
  aliases: [] as const,
  fullPath: 'fltk.org' as const,
}

export type FltkorgPackage = typeof fltkorgPackage
