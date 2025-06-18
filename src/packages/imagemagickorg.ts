/**
 * **imagemagick.org** - Package from pantry: imagemagick.org
 *
 * @domain `imagemagick.org`
 *
 * @install `launchpad install imagemagick.org`
 * @dependencies `libpng.org`, `ijg.org`, `freetype.org`, ... (+19 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.imagemagickorg
 * console.log(pkg.name)        // "imagemagick.org"
 * console.log(pkg.description) // "Package from pantry: imagemagick.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/imagemagick-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const imagemagickorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'imagemagick.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'imagemagick.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: imagemagick.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install imagemagick.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libpng.org',
    'ijg.org',
    'freetype.org',
    'libjpeg-turbo.org',
    'liblqr.wikidot.com',
    'simplesystems.org/libtiff',
    'gnu.org/libtool',
    'littlecms.com',
    'openexr.com',
    'openjpeg.org',
    'google.com/webp',
    'tukaani.org/xz',
    'sourceware.org/bzip2',
    'gnome.org/libxml2',
    'zlib.net^1',
    'jpeg.org/jpegxl',
    'perl.org',
    'libzip.org',
    'openmp.llvm.org',
    'github.com/strukturag/libheif',
    'github.com/strukturag/libheif',
    'x.org/x11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/imagemagick.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ImagemagickorgPackage = typeof imagemagickorgPackage
