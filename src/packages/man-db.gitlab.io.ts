/**
 * **man-db.gitlab.io** - Go home.
 *
 * @domain `man-db.gitlab.io`
 *
 * @install `pkgx man-db.gitlab.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mandbgitlabio
 * console.log(pkg.name)        // "man-db.gitlab.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/man-db-gitlab-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mandbgitlabioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/man-db.gitlab.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'man-db.gitlab.io' as const,
  fullPath: 'man-db.gitlab.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx man-db.gitlab.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MandbgitlabioPackage = typeof mandbgitlabioPackage
