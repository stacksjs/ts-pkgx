/**
 * **kaspad** - Package from pantry: github.com/kaspanet/kaspad
 *
 * @domain `github.com/kaspanet/kaspad`
 *
 * @install `launchpad install github.com/kaspanet/kaspad`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomkaspanetkaspad
 * console.log(pkg.name)        // "kaspad"
 * console.log(pkg.description) // "Package from pantry: github.com/kaspanet/kaspad"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kaspanet/kaspad.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkaspanetkaspadPackage = {
  /**
   * The display name of this package.
   */
  name: 'kaspad' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kaspanet/kaspad' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/kaspanet/kaspad' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/kaspanet/kaspad' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/kaspanet/kaspad -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/kaspanet/kaspad' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kaspanet/kaspad/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomkaspanetkaspadPackage = typeof githubcomkaspanetkaspadPackage
