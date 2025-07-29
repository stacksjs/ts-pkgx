/**
 * **cli** - Package from pantry: gitlab.com/gitlab-org/cli
 *
 * @domain `gitlab.com/gitlab-org/cli`
 *
 * @install `launchpad install gitlab.com/gitlab-org/cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gitlabcomgitlaborgcli
 * console.log(pkg.name)        // "cli"
 * console.log(pkg.description) // "Package from pantry: gitlab.com/gitlab-org/cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitlab-com/gitlab-org/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitlabcomgitlaborgcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitlab.com/gitlab-org/cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gitlab.com/gitlab-org/cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gitlab.com/gitlab-org/cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gitlab.com/gitlab-org/cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gitlab.com/gitlab-org/cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gitlab.com/gitlab-org/cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GitlabcomgitlaborgcliPackage = typeof gitlabcomgitlaborgcliPackage
