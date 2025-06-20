/**
 * **SDL_image** - Image decoding for many popular formats for Simple Directmedia Layer.
 *
 * @domain `libsdl.org/SDL_image`
 * @version `3.2.4` (13 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +libsdl.org/SDL_image -- $SHELL -i`
 * @dependencies `libjpeg-turbo.org^2`, `github.com/AOMediaCodec/libavif^0.11`, `libpng.org^1.6`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libsdlorgsdl_image
 * console.log(pkg.name)        // "SDL_image"
 * console.log(pkg.description) // "Image decoding for many popular formats for Sim..."
 * console.log(pkg.versions[0]) // "3.2.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libsdl-org/SDL_image.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libsdlorgsdl_imagePackage = {
  /**
   * The display name of this package.
   */
  name: 'SDL_image' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libsdl.org/SDL_image' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Image decoding for many popular formats for Simple Directmedia Layer.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libsdl.org/SDL_image/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +libsdl.org/SDL_image -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libjpeg-turbo.org^2',
    'github.com/AOMediaCodec/libavif^0.11',
    'libpng.org^1.6',
    'simplesystems.org/libtiff^4.5',
    'libsdl.org^2',
    'google.com/webp^1.3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.2.4',
    '3.2.2',
    '3.2.0',
    '2.8.8',
    '2.8.6',
    '2.8.5',
    '2.8.4',
    '2.8.3',
    '2.8.2',
    '2.8.1',
    '2.8.0',
    '2.7.1',
    '2.6.3',
  ] as const,
  aliases: [] as const,
}

export type Libsdlorgsdl_imagePackage = typeof libsdlorgsdl_imagePackage
