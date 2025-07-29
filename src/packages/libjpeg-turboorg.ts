/**
 * **libjpeg-turbo.org** - Package from pantry: libjpeg-turbo.org
 *
 * @domain `libjpeg-turbo.org`
 *
 * @install `launchpad install libjpeg-turbo.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libjpegturboorg
 * console.log(pkg.name)        // "libjpeg-turbo.org"
 * console.log(pkg.description) // "Package from pantry: libjpeg-turbo.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libjpeg-turbo-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libjpegturboorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libjpeg-turbo.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libjpeg-turbo.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libjpeg-turbo.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libjpeg-turbo.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libjpeg-turbo.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libjpeg-turbo.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libjpeg-turbo.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibjpegturboorgPackage = typeof libjpegturboorgPackage
