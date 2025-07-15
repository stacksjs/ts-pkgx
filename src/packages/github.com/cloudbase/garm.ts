/**
 * **garm** - Package from pantry: github.com/cloudbase/garm
 *
 * @domain `github.com/cloudbase/garm`
 *
 * @install `launchpad install github.com/cloudbase/garm`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcloudbasegarm
 * console.log(pkg.name)        // "garm"
 * console.log(pkg.description) // "Package from pantry: github.com/cloudbase/garm"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cloudbase/garm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcloudbasegarmPackage = {
  /**
   * The display name of this package.
   */
  name: 'garm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cloudbase/garm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/cloudbase/garm' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/cloudbase/garm' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/cloudbase/garm -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/cloudbase/garm' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/cloudbase/garm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomcloudbasegarmPackage = typeof githubcomcloudbasegarmPackage
