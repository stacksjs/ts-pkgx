/**
 * **github.com/ChrisJohnsen/tmux-MacOSX-pasteboard** - pkgx package
 *
 * @domain `github.com/ChrisJohnsen/tmux/MacOSX-pasteboard`
 *
 * @install `pkgx github.com/ChrisJohnsen/tmux-MacOSX-pasteboard`
 * @aliases `github.com/ChrisJohnsen/tmux-MacOSX-pasteboard`, `ChrisJohnsen/tmux-MacOSX-pasteboard`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomChrisJohnsentmuxMacOSXpasteboard
 * // Or access via domain
 * const samePkg = pantry.githubcomchrisjohnsentmuxmacosxpasteboard
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ChrisJohnsen"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ChrisJohnsen/tmux/MacOSX-pasteboard.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomChrisJohnsentmuxMacOSXpasteboardPackage = {
  /**
   * The display name of this package.
   */
  name: 'ChrisJohnsen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ChrisJohnsen/tmux/MacOSX-pasteboard' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/ChrisJohnsen/tmux-MacOSX-pasteboard' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/ChrisJohnsen/tmux-MacOSX-pasteboard',
    'ChrisJohnsen/tmux-MacOSX-pasteboard',
  ] as const,
  fullPath: 'github.com/ChrisJohnsen/tmux-MacOSX-pasteboard' as const,
}

export type GithubcomChrisJohnsentmuxMacOSXpasteboardPackage = typeof githubcomChrisJohnsentmuxMacOSXpasteboardPackage
