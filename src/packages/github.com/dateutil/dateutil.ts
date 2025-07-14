/**
 * **dateutil** - Package from pantry: github.com/dateutil/dateutil
 *
 * @domain `github.com/dateutil/dateutil`
 *
 * @install `launchpad install github.com/dateutil/dateutil`
 * @dependencies `github.com/benjaminp/six^1.16`, `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomdateutildateutil
 * console.log(pkg.name)        // "dateutil"
 * console.log(pkg.description) // "Package from pantry: github.com/dateutil/dateutil"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/dateutil/dateutil.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomdateutildateutilPackage = {
  /**
   * The display name of this package.
   */
  name: 'dateutil' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/dateutil/dateutil' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/dateutil/dateutil' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/dateutil/dateutil' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/dateutil/dateutil -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/dateutil/dateutil' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/benjaminp/six^1.16',
    'python.org~3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/dateutil/dateutil/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomdateutildateutilPackage = typeof githubcomdateutildateutilPackage
