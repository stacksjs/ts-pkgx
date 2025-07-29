/**
 * **unxip** - Package from pantry: github.com/saagarjha/unxip
 *
 * @domain `github.com/saagarjha/unxip`
 *
 * @install `launchpad install github.com/saagarjha/unxip`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomsaagarjhaunxip
 * console.log(pkg.name)        // "unxip"
 * console.log(pkg.description) // "Package from pantry: github.com/saagarjha/unxip"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/saagarjha/unxip.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsaagarjhaunxipPackage = {
  /**
   * The display name of this package.
   */
  name: 'unxip' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/saagarjha/unxip' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/saagarjha/unxip' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/saagarjha/unxip' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/saagarjha/unxip -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/saagarjha/unxip' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/saagarjha/unxip/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomsaagarjhaunxipPackage = typeof githubcomsaagarjhaunxipPackage
