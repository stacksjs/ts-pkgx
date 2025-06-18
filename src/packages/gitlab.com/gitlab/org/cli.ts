/**
 * **gitlab.com/gitlab-org/cli** - pkgx package
 *
 * @domain `gitlab.com/gitlab/org/cli`
 *
 * @install `pkgx gitlab.com/gitlab-org/cli`
 * @aliases `gitlab.com/gitlab-org/cli`, `gitlab-org/cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gitlabcomgitlaborgcli
 * // Or access via domain
 * const samePkg = pantry.gitlabcomgitlaborgcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gitlab-org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitlab-com/gitlab/org/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitlabcomgitlaborgcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'gitlab-org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitlab.com/gitlab/org/cli' as const,
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
  installCommand: 'pkgx gitlab.com/gitlab-org/cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gitlab.com/gitlab-org/cli',
    'gitlab-org/cli',
  ] as const,
  fullPath: 'gitlab.com/gitlab-org/cli' as const,
}

export type GitlabcomgitlaborgcliPackage = typeof gitlabcomgitlaborgcliPackage
