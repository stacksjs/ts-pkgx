/**
 * **github.com/robscott/kube-capacity** - pkgx package
 *
 * @domain `github.com/robscott/kube/capacity`
 *
 * @install `pkgx github.com/robscott/kube-capacity`
 * @aliases `github.com/robscott/kube-capacity`, `robscott/kube-capacity`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomrobscottkubecapacity
 * // Or access via domain
 * const samePkg = pantry.githubcomrobscottkubecapacity
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "robscott"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/robscott/kube/capacity.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomrobscottkubecapacityPackage = {
  /**
   * The display name of this package.
   */
  name: 'robscott' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/robscott/kube/capacity' as const,
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
  installCommand: 'pkgx github.com/robscott/kube-capacity' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/robscott/kube-capacity',
    'robscott/kube-capacity',
  ] as const,
  fullPath: 'github.com/robscott/kube-capacity' as const,
}

export type GithubcomrobscottkubecapacityPackage = typeof githubcomrobscottkubecapacityPackage
