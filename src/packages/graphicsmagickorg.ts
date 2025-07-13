/**
 * **graphicsmagick.org** - Package from pantry: graphicsmagick.org
 *
 * @domain `graphicsmagick.org`
 *
 * @install `launchpad install graphicsmagick.org`
 * @dependencies `freetype.org`, `github.com/jasper-software/jasper`, `libjpeg-turbo.org`, ... (+9 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.graphicsmagickorg
 * console.log(pkg.name)        // "graphicsmagick.org"
 * console.log(pkg.description) // "Package from pantry: graphicsmagick.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/graphicsmagick-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const graphicsmagickorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'graphicsmagick.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'graphicsmagick.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: graphicsmagick.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install graphicsmagick.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +graphicsmagick.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install graphicsmagick.org' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/graphicsmagick.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GraphicsmagickorgPackage = typeof graphicsmagickorgPackage
