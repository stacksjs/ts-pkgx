/**
 * **tmux** - Package from pantry: github.com/tmux/tmux
 *
 * @domain `github.com/tmux/tmux`
 *
 * @install `launchpad install github.com/tmux/tmux`
 * @dependencies `libevent.org^2.0`, `invisible-island.net/ncurses`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomtmuxtmux
 * console.log(pkg.name)        // "tmux"
 * console.log(pkg.description) // "Package from pantry: github.com/tmux/tmux"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/tmux/tmux.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomtmuxtmuxPackage = {
  /**
   * The display name of this package.
   */
  name: 'tmux' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/tmux/tmux' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/tmux/tmux' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/tmux/tmux' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/tmux/tmux -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/tmux/tmux' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libevent.org^2.0',
    'invisible-island.net/ncurses',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/tmux/tmux/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomtmuxtmuxPackage = typeof githubcomtmuxtmuxPackage
