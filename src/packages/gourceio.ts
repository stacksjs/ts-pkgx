/**
 * **gource.io** - Package from pantry: gource.io
 *
 * @domain `gource.io`
 *
 * @install `launchpad install gource.io`
 * @dependencies `boost.org^1.82`, `freetype.org^2`, `libpng.org^1.6`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gourceio
 * console.log(pkg.name)        // "gource.io"
 * console.log(pkg.description) // "Package from pantry: gource.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gource-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gourceioPackage = {
  /**
   * The display name of this package.
   */
  name: 'gource.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gource.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gource.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gource.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gource.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gource.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'boost.org^1.82',
    'freetype.org^2',
    'libpng.org^1.6',
    'pcre.org/v2^10',
    'libsdl.org^2',
    'glew.sourceforge.io^2',
    'libsdl.org/SDL_image^2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gource.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GourceioPackage = typeof gourceioPackage
