/**
 * **psutil** - Cross-platform lib for process and system monitoring in Python
 *
 * @domain `github.com/giampaolo/psutil`
 * @version `7.0.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/giampaolo/psutil -- $SHELL -i`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgiampaolopsutil
 * console.log(pkg.name)        // "psutil"
 * console.log(pkg.description) // "Cross-platform lib for process and system monit..."
 * console.log(pkg.versions[0]) // "7.0.0" (latest)
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
  description: 'Cross-platform lib for process and system monitoring in Python' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/giampaolo/psutil/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/giampaolo/psutil' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/giampaolo/psutil -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.0.0',
    '6.1.1',
    '6.1.0',
    '6.0.0',
    '5.9.8',
  ] as const,
  aliases: [] as const,
}

export type GithubcomgiampaolopsutilPackage = typeof githubcomgiampaolopsutilPackage
