/**
 * **gitlab-runner** - Package from pantry: gitlab.com/gitlab-org/gitlab-runner
 *
 * @domain `gitlab.com/gitlab-org/gitlab-runner`
 *
 * @install `launchpad install gitlab.com/gitlab-org/gitlab-runner`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gitlabcomgitlaborggitlabrunner
 * console.log(pkg.name)        // "gitlab-runner"
 * console.log(pkg.description) // "Package from pantry: gitlab.com/gitlab-org/gitl..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitlab-com/gitlab-org/gitlab-runner.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitlabcomgitlaborggitlabrunnerPackage = {
  /**
   * The display name of this package.
   */
  name: 'gitlab-runner' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitlab.com/gitlab-org/gitlab-runner' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gitlab.com/gitlab-org/gitlab-runner' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gitlab.com/gitlab-org/gitlab-runner' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gitlab.com/gitlab-org/gitlab-runner -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gitlab.com/gitlab-org/gitlab-runner' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gitlab.com/gitlab-org/gitlab-runner/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GitlabcomgitlaborggitlabrunnerPackage = typeof gitlabcomgitlaborggitlabrunnerPackage
