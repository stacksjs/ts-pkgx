/**
 * **tmux** - Terminal multiplexer
 *
 * @domain `github.com/tmux/tmux`
 * @programs `tmux`
 * @version `3.5a` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) tmux`
 * @name `tmux`
 * @aliases `tmux/tmux`
 * @dependencies `libevent.org^2.0`, `invisible-island.net/ncurses`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tmux
 * // Or access via domain
 * const samePkg = pantry.githubcomtmuxtmux
 * console.log(pkg === samePkg) // true
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
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) tmux' as const,
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
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'tmux/tmux',
  ] as const,
  fullPath: 'github.com/tmux/tmux' as const,
}

export type TmuxPackage = typeof tmuxPackage
