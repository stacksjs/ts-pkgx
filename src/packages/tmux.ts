/**
 * **tmux** - pkgx package
 *
 * @domain `github.com/tmux`
 *
 * @install `pkgx github.com/tmux`
 * @name `tmux`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tmux
 * // Or access via domain
 * const samePkg = pantry.githubcomtmux
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tmux"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/tmux.md
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
  domain: 'github.com/tmux' as const,
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
  installCommand: 'pkgx github.com/tmux' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/tmux' as const,
}

export type TmuxPackage = typeof tmuxPackage
