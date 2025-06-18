/**
 * **gm** - Image processing tools collection
 *
 * @domain `graphicsmagick.org`
 * @programs `gm`
 * @version `1.3.45` (5 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/graphicsmagick-org.md
 *
 * @install `sh <(curl https://pkgx.sh) gm`
 * @name `gm`
 * @dependencies `freetype.org`, `github.com/jasper-software/jasper`, `libjpeg-turbo.org`, ... (+9 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gm
 * // Or access via domain
 * const samePkg = pantry.graphicsmagickorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gm"
 * console.log(pkg.description) // "Image processing tools collection"
 * console.log(pkg.programs)    // ["gm"]
 * console.log(pkg.versions[0]) // "1.3.45" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/graphicsmagick-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gmPackage = {
  /**
   * The display name of this package.
   */
  name: 'gm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'graphicsmagick.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Image processing tools collection' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/graphicsmagick.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) gm' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gm',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'freetype.org',
    'github.com/jasper-software/jasper',
    'libjpeg-turbo.org',
    'jpeg.org/jpegxl',
    'libpng.org',
    'simplesystems.org/libtiff',
    'gnu.org/libtool',
    'littlecms.com>=2.0',
    'google.com/webp',
    'sourceware.org/bzip2',
    'gnome.org/libxml2',
    'zlib.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.45',
    '1.3.44',
    '1.3.43',
    '1.3.42',
    '1.3.40',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'graphicsmagick.org' as const,
}

export type GmPackage = typeof gmPackage
