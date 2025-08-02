/**
 * **github.com/neovim/unibilium** - https://github.com/neovim/neovim/blob/master/MAINTAIN.md#third-party-dependencies
 *
 * @domain `github.com/neovim/unibilium`
 * @version `2.1.2` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/neovim/unibilium`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomneovimunibilium
 * console.log(pkg.name)        // "github.com/neovim/unibilium"
 * console.log(pkg.description) // "https://github.com/neovim/neovim/blob/master/MA..."
 * console.log(pkg.versions[0]) // "2.1.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/neovim/unibilium.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomneovimunibiliumPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/neovim/unibilium' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/neovim/unibilium' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'https://github.com/neovim/neovim/blob/master/MAINTAIN.md#third-party-dependencies' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/neovim/unibilium/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/neovim/unibilium' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.1.2',
    '2.1.1',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/neovim/unibilium -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/neovim/unibilium' as const,
}

export type GithubcomneovimunibiliumPackage = typeof githubcomneovimunibiliumPackage
