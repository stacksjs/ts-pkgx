/**
 * **go-mod-upgrade** - Package from pantry: github.com/oligot/go-mod-upgrade
 *
 * @domain `github.com/oligot/go-mod-upgrade`
 *
 * @install `launchpad install github.com/oligot/go-mod-upgrade`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomoligotgomodupgrade
 * console.log(pkg.name)        // "go-mod-upgrade"
 * console.log(pkg.description) // "Package from pantry: github.com/oligot/go-mod-u..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/oligot/go-mod-upgrade.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomoligotgomodupgradePackage = {
  /**
   * The display name of this package.
   */
  name: 'go-mod-upgrade' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/oligot/go-mod-upgrade' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/oligot/go-mod-upgrade' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/oligot/go-mod-upgrade' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/oligot/go-mod-upgrade -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/oligot/go-mod-upgrade' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/oligot/go-mod-upgrade/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomoligotgomodupgradePackage = typeof githubcomoligotgomodupgradePackage
