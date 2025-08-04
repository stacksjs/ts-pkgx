/**
 * **slides** - Package from pantry: maaslalani.com/slides
 *
 * @domain `maaslalani.com/slides`
 *
 * @install `launchpad install maaslalani.com/slides`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.maaslalanicomslides
 * console.log(pkg.name)        // "slides"
 * console.log(pkg.description) // "Package from pantry: maaslalani.com/slides"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/maaslalani-com/slides.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const maaslalanicomslidesPackage = {
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
  description: 'Package from pantry: maaslalani.com/slides' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install maaslalani.com/slides' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +maaslalani.com/slides -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install maaslalani.com/slides' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/maaslalani.com/slides/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MaaslalanicomslidesPackage = typeof maaslalanicomslidesPackage
