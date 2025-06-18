/**
 * **github.com/newren/git-filter-repo** - pkgx package
 *
 * @domain `github.com/newren/git/filter-repo`
 *
 * @install `pkgx github.com/newren/git-filter-repo`
 * @aliases `github.com/newren/git-filter-repo`, `newren/git-filter-repo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomnewrengitfilterrepo
 * // Or access via domain
 * const samePkg = pantry.githubcomnewrengitfilterrepo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "newren"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/newren/git/filter-repo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomnewrengitfilterrepoPackage = {
  /**
   * The display name of this package.
   */
  name: 'newren' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/newren/git/filter-repo' as const,
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
  installCommand: 'pkgx github.com/newren/git-filter-repo' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/newren/git-filter-repo',
    'newren/git-filter-repo',
  ] as const,
  fullPath: 'github.com/newren/git-filter-repo' as const,
}

export type GithubcomnewrengitfilterrepoPackage = typeof githubcomnewrengitfilterrepoPackage
