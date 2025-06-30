/**
 * **SDL_image** - Package from pantry: libsdl.org/SDL_image
 *
 * @domain `libsdl.org/SDL_image`
 *
 * @install `launchpad install libsdl.org/SDL_image`
 * @dependencies `libjpeg-turbo.org^2`, `github.com/AOMediaCodec/libavif^0.11`, `libpng.org^1.6`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libsdlorgsdl_image
 * console.log(pkg.name)        // "SDL_image"
 * console.log(pkg.description) // "Package from pantry: libsdl.org/SDL_image"
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
  description: 'Package from pantry: libsdl.org/SDL_image' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libsdl.org/SDL_image' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libsdl.org/SDL_image -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libsdl.org/SDL_image' as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libsdl.org/SDL_image/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Libsdlorgsdl_imagePackage = typeof libsdlorgsdl_imagePackage
