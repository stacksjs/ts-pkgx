/**
 * **tmux** - Terminal multiplexer
 *
 * @domain `github.com/tmux/tmux`
 * @programs `tmux`
 * @version `3.5a` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/tmux/tmux`
 * @homepage https://tmux.github.io/
 * @dependencies `libevent.org^2.0`, `invisible-island.net/ncurses`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomtmuxtmux
 * console.log(pkg.name)        // "tmux"
 * console.log(pkg.description) // "Terminal multiplexer"
 * console.log(pkg.programs)    // ["tmux"]
 * console.log(pkg.versions[0]) // "3.5a" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/tmux/tmux.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tmuxPackage = {
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
  description: 'Terminal multiplexer' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/tmux/tmux/package.yml' as const,
  homepageUrl: 'https://tmux.github.io/' as const,
  githubUrl: 'https://github.com/tmux/tmux' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/tmux/tmux' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/tmux/tmux -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/tmux/tmux' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tmux',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libevent.org^2.0',
    'invisible-island.net/ncurses',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.5a',
    '3.5.0',
    '3.4.0',
    '3.3a',
    '3.3.0',
  ] as const,
  aliases: [] as const,
}

export type TmuxPackage = typeof tmuxPackage
