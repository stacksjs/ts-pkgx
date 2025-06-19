/**
 * **slides** - Terminal based presentation tool
 *
 * @domain `maaslalani.com/slides`
 * @programs `slides`
 * @version `0.9.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install slides`
 * @name `slides`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.slides
 * // Or access via domain
 * const samePkg = pantry.maaslalanicomslides
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "slides"
 * console.log(pkg.description) // "Terminal based presentation tool"
 * console.log(pkg.programs)    // ["slides"]
 * console.log(pkg.versions[0]) // "0.9.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/maaslalani-com/slides.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const slidesPackage = {
  /**
   * The display name of this package.
   */
  name: 'slides' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'maaslalani.com/slides' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Terminal based presentation tool' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/maaslalani.com/slides/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install slides' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'slides',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type SlidesPackage = typeof slidesPackage
