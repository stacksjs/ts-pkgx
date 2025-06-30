/**
 * **imagemagick.org** - Package from pantry: imagemagick.org
 *
 * @domain `imagemagick.org`
 *
 * @install `launchpad install imagemagick.org`
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install imagemagick.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +imagemagick.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install imagemagick.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/imagemagick.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ImagemagickorgPackage = typeof imagemagickorgPackage
