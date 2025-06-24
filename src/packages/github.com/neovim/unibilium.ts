/**
 * **unibilium** - Package from pantry: github.com/neovim/unibilium
 *
 * @domain `github.com/neovim/unibilium`
 *
 * @install `launchpad install github.com/neovim/unibilium`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomneovimunibilium
 * console.log(pkg.name)        // "unibilium"
 * console.log(pkg.description) // "Package from pantry: github.com/neovim/unibilium"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/neovim/unibilium.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomneovimunibiliumPackage = {
  /**
   * The display name of this package.
   */
  name: 'unibilium' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/neovim/unibilium' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/neovim/unibilium' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/neovim/unibilium' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/neovim/unibilium -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/neovim/unibilium' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/neovim/unibilium/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomneovimunibiliumPackage = typeof githubcomneovimunibiliumPackage
