/**
 * **opendev.org/git-review** - pkgx package
 *
 * @domain `opendev.org/git/review`
 *
 * @install `pkgx opendev.org/git-review`
 * @name `git-review`
 * @aliases `opendev.org/git-review`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.opendevorggitreview
 * // Or access via domain
 * const samePkg = pantry.opendevorggitreview
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-review"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opendev-org/git/review.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opendevorggitreviewPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-review' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'opendev.org/git/review' as const,
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
  installCommand: 'pkgx opendev.org/git-review' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'opendev.org/git-review',
  ] as const,
  fullPath: 'opendev.org/git-review' as const,
}

export type OpendevorggitreviewPackage = typeof opendevorggitreviewPackage
