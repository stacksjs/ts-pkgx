/**
 * **github.com/nvm-sh/nvm** - pkgx package
 *
 * @domain `github.com/nvm/sh/nvm`
 *
 * @install `pkgx github.com/nvm-sh/nvm`
 * @aliases `github.com/nvm-sh/nvm`, `nvm-sh/nvm`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomnvmshnvm
 * // Or access via domain
 * const samePkg = pantry.githubcomnvmshnvm
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nvm-sh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nvm/sh/nvm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomnvmshnvmPackage = {
  /**
   * The display name of this package.
   */
  name: 'nvm-sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nvm/sh/nvm' as const,
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
  installCommand: 'pkgx github.com/nvm-sh/nvm' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/nvm-sh/nvm',
    'nvm-sh/nvm',
  ] as const,
  fullPath: 'github.com/nvm-sh/nvm' as const,
}

export type GithubcomnvmshnvmPackage = typeof githubcomnvmshnvmPackage
