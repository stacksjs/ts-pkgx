/**
 * **jpegxl** - JPEG XL image format reference implementation
 *
 * @domain `jpeg.org/jpegxl`
 * @programs `cjxl`, `djxl`, `jxlinfo`
 * @version `0.11.1` (18 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/jpeg-org/jpegxl.md
 *
 * @install `sh <(curl https://pkgx.sh) +jpeg.org/jpegxl -- $SHELL -i`
 * @aliases `jpegxl`
 * @dependencies `github.com/google/brotli^1`, `littlecms.com^2.13`, `google.com/highway^1`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.jpegxl
 * // Or access via domain
 * const samePkg = pantry.jpegorgjpegxl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jpeg.org/jpegxl"
 * console.log(pkg.description) // "JPEG XL image format reference implementation"
 * console.log(pkg.programs)    // ["cjxl", "djxl", ...]
 * console.log(pkg.versions[0]) // "0.11.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jpeg-org/jpegxl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jpegxlPackage = {
  /**
   * The display name of this package.
   */
  name: 'jpeg.org/jpegxl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jpeg.org/jpegxl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'JPEG XL image format reference implementation' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jpeg.org/jpegxl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +jpeg.org/jpegxl -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cjxl',
    'djxl',
    'jxlinfo',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/google/brotli^1',
    'littlecms.com^2.13',
    'google.com/highway^1',
    'google.com/webp^1',
    'giflib.sourceforge.io^5',
    'openexr.com^3',
    'libpng.org^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.11.1',
    '0.11.0',
    '0.10.4',
    '0.10.3',
    '0.10.2',
    '0.10.1',
    '0.10.0',
    '0.9.4',
    '0.9.3',
    '0.9.2',
    '0.9.1',
    '0.9.0',
    '0.8.4',
    '0.8.3',
    '0.8.2',
    '0.8.1',
    '0.7.2',
    '0.7.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'jpegxl',
  ] as const,
  fullPath: 'jpeg.org/jpegxl' as const,
}

export type JpegxlPackage = typeof jpegxlPackage
