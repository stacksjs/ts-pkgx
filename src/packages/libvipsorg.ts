/**
 * **libvips.org** - Package from pantry: libvips.org
 *
 * @domain `libvips.org`
 *
 * @install `launchpad install libvips.org`
 * @dependencies `mozilla.org/mozjpeg`, `cairographics.org`, `heasarc.gsfc.nasa.gov/cfitsio`, ... (+24 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libvipsorg
 * console.log(pkg.name)        // "libvips.org"
 * console.log(pkg.description) // "Package from pantry: libvips.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libvips-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libvipsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libvips.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libvips.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libvips.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libvips.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libvips.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libvips.org' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libvips.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibvipsorgPackage = typeof libvipsorgPackage
