/**
 * **zsh-users** - pkgx package
 *
 * @domain `github.com/zsh-users`
 *
 * @install `pkgx github.com/zsh-users`
 * @name `zsh-users`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.zshusers
 * // Or access via domain
 * const samePkg = pantry.githubcomzshusers
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "zsh-users"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/zsh-users.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zshusersPackage = {
  /**
   * The display name of this package.
   */
  name: 'zsh-users' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/zsh-users' as const,
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
  installCommand: 'pkgx github.com/zsh-users' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/zsh-users' as const,
}

export type ZshusersPackage = typeof zshusersPackage
