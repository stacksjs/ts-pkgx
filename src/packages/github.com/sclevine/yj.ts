/**
 * **yj** - Package from pantry: github.com/sclevine/yj
 *
 * @domain `github.com/sclevine/yj`
 *
 * @install `launchpad install github.com/sclevine/yj`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomsclevineyj
 * console.log(pkg.name)        // "yj"
 * console.log(pkg.description) // "Package from pantry: github.com/sclevine/yj"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sclevine/yj.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsclevineyjPackage = {
  /**
   * The display name of this package.
   */
  name: 'yj' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sclevine/yj' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/sclevine/yj' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/sclevine/yj' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/sclevine/yj -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/sclevine/yj' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/sclevine/yj/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomsclevineyjPackage = typeof githubcomsclevineyjPackage
