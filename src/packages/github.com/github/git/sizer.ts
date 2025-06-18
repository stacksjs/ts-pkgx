/**
 * **github.com/github/git-sizer** - pkgx package
 *
 * @domain `github.com/github/git/sizer`
 *
 * @install `pkgx github.com/github/git-sizer`
 * @aliases `github.com/github/git-sizer`, `github/git-sizer`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomgithubgitsizer
 * // Or access via domain
 * const samePkg = pantry.githubcomgithubgitsizer
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/github/git/sizer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgithubgitsizerPackage = {
  /**
   * The display name of this package.
   */
  name: 'github' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/github/git/sizer' as const,
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
  installCommand: 'pkgx github.com/github/git-sizer' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/github/git-sizer',
    'github/git-sizer',
  ] as const,
  fullPath: 'github.com/github/git-sizer' as const,
}

export type GithubcomgithubgitsizerPackage = typeof githubcomgithubgitsizerPackage
