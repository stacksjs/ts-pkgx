/**
 * **github.com/git-chglog** - pkgx package
 *
 * @domain `github.com/git/chglog`
 *
 * @install `pkgx github.com/git-chglog`
 * @name `git-chglog`
 * @aliases `github.com/git-chglog`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomgitchglog
 * // Or access via domain
 * const samePkg = pantry.githubcomgitchglog
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-chglog"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/git/chglog.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgitchglogPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-chglog' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/git/chglog' as const,
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
  installCommand: 'pkgx github.com/git-chglog' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/git-chglog',
  ] as const,
  fullPath: 'github.com/git-chglog' as const,
}

export type GithubcomgitchglogPackage = typeof githubcomgitchglogPackage
