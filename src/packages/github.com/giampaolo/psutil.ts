/**
 * **psutil** - Package from pantry: github.com/giampaolo/psutil
 *
 * @domain `github.com/giampaolo/psutil`
 *
 * @install `launchpad install github.com/giampaolo/psutil`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgiampaolopsutil
 * console.log(pkg.name)        // "psutil"
 * console.log(pkg.description) // "Package from pantry: github.com/giampaolo/psutil"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/giampaolo/psutil.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgiampaolopsutilPackage = {
  /**
   * The display name of this package.
   */
  name: 'psutil' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/giampaolo/psutil' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/giampaolo/psutil' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/giampaolo/psutil' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/giampaolo/psutil -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/giampaolo/psutil' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/giampaolo/psutil/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomgiampaolopsutilPackage = typeof githubcomgiampaolopsutilPackage
