/**
 * **alsa-lib** - Package from pantry: alsa-project.org/alsa-lib
 *
 * @domain `alsa-project.org/alsa-lib`
 *
 * @install `launchpad install alsa-project.org/alsa-lib`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.alsaprojectorgalsalib
 * console.log(pkg.name)        // "alsa-lib"
 * console.log(pkg.description) // "Package from pantry: alsa-project.org/alsa-lib"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/alsa-project-org/alsa-lib.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const alsaprojectorgalsalibPackage = {
  /**
   * The display name of this package.
   */
  name: 'alsa-lib' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'alsa-project.org/alsa-lib' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: alsa-project.org/alsa-lib' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install alsa-project.org/alsa-lib' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +alsa-project.org/alsa-lib -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install alsa-project.org/alsa-lib' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/alsa-project.org/alsa-lib/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AlsaprojectorgalsalibPackage = typeof alsaprojectorgalsalibPackage
