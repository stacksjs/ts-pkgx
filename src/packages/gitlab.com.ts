/**
 * **gitlab.com** - Go home.
 *
 * @domain `gitlab.com`
 *
 * @install `pkgx gitlab.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gitlabcom
 * console.log(pkg.name)        // "gitlab.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitlab-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitlabcomPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/gitlab.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitlab.com' as const,
  fullPath: 'gitlab.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gitlab.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GitlabcomPackage = typeof gitlabcomPackage
