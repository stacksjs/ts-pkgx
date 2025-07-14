/**
 * **git-review** - Package from pantry: opendev.org/git-review
 *
 * @domain `opendev.org/git-review`
 *
 * @install `launchpad install opendev.org/git-review`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opendevorggitreview
 * console.log(pkg.name)        // "git-review"
 * console.log(pkg.description) // "Package from pantry: opendev.org/git-review"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opendev-org/git-review.md
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
  domain: 'opendev.org/git-review' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: opendev.org/git-review' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install opendev.org/git-review' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +opendev.org/git-review -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install opendev.org/git-review' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/opendev.org/git-review/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpendevorggitreviewPackage = typeof opendevorggitreviewPackage
