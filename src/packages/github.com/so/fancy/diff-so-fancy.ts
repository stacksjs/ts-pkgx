/**
 * **github.com/so-fancy/diff-so-fancy** - pkgx package
 *
 * @domain `github.com/so/fancy/diff-so-fancy`
 *
 * @install `pkgx github.com/so-fancy/diff-so-fancy`
 * @aliases `github.com/so-fancy/diff-so-fancy`, `so-fancy/diff-so-fancy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomsofancydiffsofancy
 * // Or access via domain
 * const samePkg = pantry.githubcomsofancydiffsofancy
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "so-fancy"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/so/fancy/diff-so-fancy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsofancydiffsofancyPackage = {
  /**
   * The display name of this package.
   */
  name: 'so-fancy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/so/fancy/diff-so-fancy' as const,
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
  installCommand: 'pkgx github.com/so-fancy/diff-so-fancy' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/so-fancy/diff-so-fancy',
    'so-fancy/diff-so-fancy',
  ] as const,
  fullPath: 'github.com/so-fancy/diff-so-fancy' as const,
}

export type GithubcomsofancydiffsofancyPackage = typeof githubcomsofancydiffsofancyPackage
