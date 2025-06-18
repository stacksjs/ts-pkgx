/**
 * **github.com/zsh-users/zsh-autosuggestions** - pkgx package
 *
 * @domain `github.com/zsh/users/zsh-autosuggestions`
 *
 * @install `pkgx github.com/zsh-users/zsh-autosuggestions`
 * @aliases `github.com/zsh-users/zsh-autosuggestions`, `zsh-users/zsh-autosuggestions`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomzshuserszshautosuggestions
 * // Or access via domain
 * const samePkg = pantry.githubcomzshuserszshautosuggestions
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "zsh-users"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/zsh/users/zsh-autosuggestions.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomzshuserszshautosuggestionsPackage = {
  /**
   * The display name of this package.
   */
  name: 'zsh-users' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/zsh/users/zsh-autosuggestions' as const,
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
  installCommand: 'pkgx github.com/zsh-users/zsh-autosuggestions' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/zsh-users/zsh-autosuggestions',
    'zsh-users/zsh-autosuggestions',
  ] as const,
  fullPath: 'github.com/zsh-users/zsh-autosuggestions' as const,
}

export type GithubcomzshuserszshautosuggestionsPackage = typeof githubcomzshuserszshautosuggestionsPackage
