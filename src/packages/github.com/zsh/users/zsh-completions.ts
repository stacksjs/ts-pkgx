/**
 * **github.com/zsh-users/zsh-completions** - pkgx package
 *
 * @domain `github.com/zsh/users/zsh-completions`
 *
 * @install `pkgx github.com/zsh-users/zsh-completions`
 * @aliases `github.com/zsh-users/zsh-completions`, `zsh-users/zsh-completions`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomzshuserszshcompletions
 * // Or access via domain
 * const samePkg = pantry.githubcomzshuserszshcompletions
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "zsh-users"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/zsh/users/zsh-completions.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomzshuserszshcompletionsPackage = {
  /**
   * The display name of this package.
   */
  name: 'zsh-users' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/zsh/users/zsh-completions' as const,
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
  installCommand: 'pkgx github.com/zsh-users/zsh-completions' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/zsh-users/zsh-completions',
    'zsh-users/zsh-completions',
  ] as const,
  fullPath: 'github.com/zsh-users/zsh-completions' as const,
}

export type GithubcomzshuserszshcompletionsPackage = typeof githubcomzshuserszshcompletionsPackage
