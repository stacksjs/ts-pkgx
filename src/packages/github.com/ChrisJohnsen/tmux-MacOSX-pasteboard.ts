/**
 * **tmux-MacOSX-pasteboard** - Package from pantry: github.com/ChrisJohnsen/tmux-MacOSX-pasteboard
 *
 * @domain `github.com/ChrisJohnsen/tmux-MacOSX-pasteboard`
 *
 * @install `launchpad install github.com/ChrisJohnsen/tmux-MacOSX-pasteboard`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomchrisjohnsentmuxmacosxpasteboard
 * console.log(pkg.name)        // "tmux-MacOSX-pasteboard"
 * console.log(pkg.description) // "Package from pantry: github.com/ChrisJohnsen/tm..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ChrisJohnsen/tmux-MacOSX-pasteboard.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomchrisjohnsentmuxmacosxpasteboardPackage = {
  /**
   * The display name of this package.
   */
  name: 'tmux-MacOSX-pasteboard' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ChrisJohnsen/tmux-MacOSX-pasteboard' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/ChrisJohnsen/tmux-MacOSX-pasteboard' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/ChrisJohnsen/tmux-MacOSX-pasteboard' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/ChrisJohnsen/tmux-MacOSX-pasteboard -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/ChrisJohnsen/tmux-MacOSX-pasteboard' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ChrisJohnsen/tmux-MacOSX-pasteboard/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomchrisjohnsentmuxmacosxpasteboardPackage = typeof githubcomchrisjohnsentmuxmacosxpasteboardPackage
