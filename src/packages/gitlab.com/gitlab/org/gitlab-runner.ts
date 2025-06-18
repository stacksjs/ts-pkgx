/**
 * **gitlab.com/gitlab-org/gitlab-runner** - pkgx package
 *
 * @domain `gitlab.com/gitlab/org/gitlab-runner`
 *
 * @install `pkgx gitlab.com/gitlab-org/gitlab-runner`
 * @aliases `gitlab.com/gitlab-org/gitlab-runner`, `gitlab-org/gitlab-runner`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gitlabcomgitlaborggitlabrunner
 * // Or access via domain
 * const samePkg = pantry.gitlabcomgitlaborggitlabrunner
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gitlab-org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitlab-com/gitlab/org/gitlab-runner.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitlabcomgitlaborggitlabrunnerPackage = {
  /**
   * The display name of this package.
   */
  name: 'gitlab-org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitlab.com/gitlab/org/gitlab-runner' as const,
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
  installCommand: 'pkgx gitlab.com/gitlab-org/gitlab-runner' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gitlab.com/gitlab-org/gitlab-runner',
    'gitlab-org/gitlab-runner',
  ] as const,
  fullPath: 'gitlab.com/gitlab-org/gitlab-runner' as const,
}

export type GitlabcomgitlaborggitlabrunnerPackage = typeof gitlabcomgitlaborggitlabrunnerPackage
