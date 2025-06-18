/**
 * **mozjpeg** - Improved JPEG encoder.
 *
 * @domain `mozilla.org/mozjpeg`
 * @programs `cjpeg`, `djpeg`, `jpegtran`, `rdjpgcom`, `tjbench`, ... (+1 more)
 * @version `4.0.3` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +mozilla.org/mozjpeg -- $SHELL -i`
 * @aliases `mozjpeg`
 * @dependencies `libpng.org^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.mozjpeg
 * // Or access via domain
 * const samePkg = pantry.mozillaorgmozjpeg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mozilla.org/mozjpeg"
 * console.log(pkg.description) // "Improved JPEG encoder."
 * console.log(pkg.programs)    // ["cjpeg", "djpeg", ...]
 * console.log(pkg.versions[0]) // "4.0.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mozilla-org/mozjpeg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mozjpegPackage = {
  /**
   * The display name of this package.
   */
  name: 'mozilla.org/mozjpeg' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mozilla.org/mozjpeg' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Improved JPEG encoder.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mozilla.org/mozjpeg/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +mozilla.org/mozjpeg -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cjpeg',
    'djpeg',
    'jpegtran',
    'rdjpgcom',
    'tjbench',
    'wrjpgcom',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libpng.org^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.0.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'mozjpeg',
  ] as const,
  fullPath: 'mozilla.org/mozjpeg' as const,
}

export type MozjpegPackage = typeof mozjpegPackage
