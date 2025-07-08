/**
 * **org-stats** - Package from pantry: github.com/caarlos0/org-stats
 *
 * @domain `github.com/caarlos0/org-stats`
 *
 * @install `launchpad install github.com/caarlos0/org-stats`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcaarlos0orgstats
 * console.log(pkg.name)        // "org-stats"
 * console.log(pkg.description) // "Package from pantry: github.com/caarlos0/org-stats"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/caarlos0/org-stats.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcaarlos0orgstatsPackage = {
  /**
   * The display name of this package.
   */
  name: 'org-stats' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/caarlos0/org-stats' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/caarlos0/org-stats' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/caarlos0/org-stats' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/caarlos0/org-stats -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/caarlos0/org-stats' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/caarlos0/org-stats/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomcaarlos0orgstatsPackage = typeof githubcomcaarlos0orgstatsPackage
