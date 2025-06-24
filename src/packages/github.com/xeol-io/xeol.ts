/**
 * **xeol** - Package from pantry: github.com/xeol-io/xeol
 *
 * @domain `github.com/xeol-io/xeol`
 *
 * @install `launchpad install github.com/xeol-io/xeol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomxeolioxeol
 * console.log(pkg.name)        // "xeol"
 * console.log(pkg.description) // "Package from pantry: github.com/xeol-io/xeol"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/xeol-io/xeol.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomxeolioxeolPackage = {
  /**
   * The display name of this package.
   */
  name: 'xeol' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/xeol-io/xeol' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/xeol-io/xeol' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/xeol-io/xeol' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/xeol-io/xeol -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/xeol-io/xeol' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/xeol-io/xeol/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomxeolioxeolPackage = typeof githubcomxeolioxeolPackage
