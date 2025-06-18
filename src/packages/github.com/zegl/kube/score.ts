/**
 * **github.com/zegl/kube-score** - pkgx package
 *
 * @domain `github.com/zegl/kube/score`
 *
 * @install `pkgx github.com/zegl/kube-score`
 * @aliases `github.com/zegl/kube-score`, `zegl/kube-score`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomzeglkubescore
 * // Or access via domain
 * const samePkg = pantry.githubcomzeglkubescore
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "zegl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/zegl/kube/score.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomzeglkubescorePackage = {
  /**
   * The display name of this package.
   */
  name: 'zegl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/zegl/kube/score' as const,
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
  installCommand: 'pkgx github.com/zegl/kube-score' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/zegl/kube-score',
    'zegl/kube-score',
  ] as const,
  fullPath: 'github.com/zegl/kube-score' as const,
}

export type GithubcomzeglkubescorePackage = typeof githubcomzeglkubescorePackage
