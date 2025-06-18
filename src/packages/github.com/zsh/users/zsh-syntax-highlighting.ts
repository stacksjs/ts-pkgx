/**
 * **github.com/zsh-users/zsh-syntax-highlighting** - pkgx package
 *
 * @domain `github.com/zsh/users/zsh-syntax-highlighting`
 *
 * @install `pkgx github.com/zsh-users/zsh-syntax-highlighting`
 * @aliases `github.com/zsh-users/zsh-syntax-highlighting`, `zsh-users/zsh-syntax-highlighting`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomzshuserszshsyntaxhighlighting
 * // Or access via domain
 * const samePkg = pantry.githubcomzshuserszshsyntaxhighlighting
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "zsh-users"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/zsh/users/zsh-syntax-highlighting.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomzshuserszshsyntaxhighlightingPackage = {
  /**
   * The display name of this package.
   */
  name: 'zsh-users' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/zsh/users/zsh-syntax-highlighting' as const,
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
  installCommand: 'pkgx github.com/zsh-users/zsh-syntax-highlighting' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/zsh-users/zsh-syntax-highlighting',
    'zsh-users/zsh-syntax-highlighting',
  ] as const,
  fullPath: 'github.com/zsh-users/zsh-syntax-highlighting' as const,
}

export type GithubcomzshuserszshsyntaxhighlightingPackage = typeof githubcomzshuserszshsyntaxhighlightingPackage
