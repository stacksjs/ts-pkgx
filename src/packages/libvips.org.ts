/**
 * **vips** - A fast image processing library with low memory needs.
 *
 * @domain `libvips.org`
 * @programs `vips`, `vipsedit`, `vipsheader`, `vipsprofile`, `vipsthumbnail`
 * @version `8.16.1` (8 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/libvips-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +libvips.org -- $SHELL -i`
 * @aliases `vips`
 * @dependencies `mozilla.org/mozjpeg`, `cairographics.org`, `heasarc.gsfc.nasa.gov/cfitsio`, ... (+24 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.vips
 * // Or access via domain
 * const samePkg = pantry.libvipsorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "vips"
 * console.log(pkg.description) // "A fast image processing library with low memory..."
 * console.log(pkg.programs)    // ["vips", "vipsedit", ...]
 * console.log(pkg.versions[0]) // "8.16.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libvips-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vipsPackage = {
  /**
   * The display name of this package.
   */
  name: 'vips' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libvips.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A fast image processing library with low memory needs.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libvips.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +libvips.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'vips',
    'vipsedit',
    'vipsheader',
    'vipsprofile',
    'vipsthumbnail',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'mozilla.org/mozjpeg',
    'cairographics.org',
    'heasarc.gsfc.nasa.gov/cfitsio',
    'github.com/dloebl/cgif',
    'fftw.org',
    'freedesktop.org/fontconfig',
    'gnu.org/gettext',
    'gnome.org/glib',
    'graphicsmagick.org',
    'jpeg.org/jpegxl',
    'libexif.github.io',
    'gnome.org/libgsf',
    'github.com/strukturag/libheif',
    'pngquant.org/lib',
    'matio.sourceforge.io',
    'gnome.org/librsvg',
    'libspng.org',
    'simplesystems.org/libtiff',
    'littlecms.com',
    'openexr.com',
    'openjpeg.org',
    'gstreamer.freedesktop.org/orc',
    'gnome.org/pango',
    'poppler.freedesktop.org',
    'google.com/webp',
    'libexpat.github.io',
    'zlib.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '8.16.1',
    '8.16.0',
    '8.15.5',
    '8.15.3',
    '8.15.2',
    '8.15.1',
    '8.15.0',
    '8.14.5',
  ] as const,
  fullPath: 'libvips.org' as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'vips',
  ] as const,
}

export type VipsPackage = typeof vipsPackage
