/**
 * **gitlab-org** - pkgx package
 *
 * @domain `gitlab.com/gitlab-org`
 *
 * @install `pkgx gitlab.com/gitlab-org`
 * @name `gitlab-org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gitlaborg
 * // Or access via domain
 * const samePkg = pantry.gitlabcomgitlaborg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gitlab-org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitlab-com/gitlab-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitlaborgPackage = {
  /**
   * The display name of this package.
   */
  name: 'gitlab-org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitlab.com/gitlab-org' as const,
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
  installCommand: 'pkgx gitlab.com/gitlab-org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'gitlab.com/gitlab-org' as const,
}

export type GitlaborgPackage = typeof gitlaborgPackage
