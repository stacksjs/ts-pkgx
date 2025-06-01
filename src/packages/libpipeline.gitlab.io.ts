/**
 * **libpipeline.gitlab.io** - Go home.
 *
 * @domain `libpipeline.gitlab.io`
 *
 * @install `pkgx libpipeline.gitlab.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libpipelinegitlabio
 * console.log(pkg.name)        // "libpipeline.gitlab.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libpipeline-gitlab-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libpipelinegitlabioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/libpipeline.gitlab.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libpipeline.gitlab.io' as const,
  fullPath: 'libpipeline.gitlab.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libpipeline.gitlab.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibpipelinegitlabioPackage = typeof libpipelinegitlabioPackage
