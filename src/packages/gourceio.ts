/**
 * **gource** - software version control visualization
 *
 * @domain `gource.io`
 * @programs `gource`
 * @version `0.55.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gource`
 * @name `gource`
 * @dependencies `boost.org^1.82`, `freetype.org^2`, `libpng.org^1.6`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gource
 * // Or access via domain
 * const samePkg = pantry.gourceio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gource"
 * console.log(pkg.description) // "software version control visualization"
 * console.log(pkg.programs)    // ["gource"]
 * console.log(pkg.versions[0]) // "0.55.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gource-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gourcePackage = {
  /**
   * The display name of this package.
   */
  name: 'gource' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gource.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'software version control visualization' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gource.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gource' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gource',
  ] as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.55.0',
    '0.54.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) gource -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gource' as const,
}

export type GourcePackage = typeof gourcePackage
