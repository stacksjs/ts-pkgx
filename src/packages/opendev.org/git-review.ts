/**
 * **git-review** - pkgx package
 *
 * @domain `opendev.org/git-review`
 * @programs `git-review`
 * @version `2.5.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install git-review`
 * @name `git-review`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gitreview
 * // Or access via domain
 * const samePkg = pantry.opendevorggitreview
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-review"
 * console.log(pkg.programs)    // ["git-review"]
 * console.log(pkg.versions[0]) // "2.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opendev-org/git-review.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitreviewPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-review' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'opendev.org/git-review' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/opendev.org/git-review/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install git-review' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'git-review',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.5.0',
    '2.4.0',
    '2.3.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type GitreviewPackage = typeof gitreviewPackage
