/**
 * **gitea** - pkgx package
 *
 * @domain `git.osgeo.org/gitea`
 *
 * @install `pkgx git.osgeo.org/gitea`
 * @name `gitea`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gitea
 * // Or access via domain
 * const samePkg = pantry.gitosgeoorggitea
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gitea"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-osgeo-org/gitea.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const giteaPackage = {
  /**
   * The display name of this package.
   */
  name: 'gitea' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'git.osgeo.org/gitea' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from git.osgeo.org/gitea' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx git.osgeo.org/gitea' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'git.osgeo.org/gitea' as const,
}

export type GiteaPackage = typeof giteaPackage
