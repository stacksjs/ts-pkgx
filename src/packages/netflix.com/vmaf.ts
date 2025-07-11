/**
 * **vmaf** - Package from pantry: netflix.com/vmaf
 *
 * @domain `netflix.com/vmaf`
 *
 * @install `launchpad install netflix.com/vmaf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.netflixcomvmaf
 * console.log(pkg.name)        // "vmaf"
 * console.log(pkg.description) // "Package from pantry: netflix.com/vmaf"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/netflix-com/vmaf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const netflixcomvmafPackage = {
  /**
   * The display name of this package.
   */
  name: 'vmaf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'netflix.com/vmaf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: netflix.com/vmaf' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install netflix.com/vmaf' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +netflix.com/vmaf -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install netflix.com/vmaf' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/netflix.com/vmaf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NetflixcomvmafPackage = typeof netflixcomvmafPackage
