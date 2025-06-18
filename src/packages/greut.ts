/**
 * **greut** - pkgx package
 *
 * @domain `gitlab.com/greut`
 *
 * @install `pkgx gitlab.com/greut`
 * @name `greut`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.greut
 * // Or access via domain
 * const samePkg = pantry.gitlabcomgreut
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "greut"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitlab-com/greut.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const greutPackage = {
  /**
   * The display name of this package.
   */
  name: 'greut' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitlab.com/greut' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from gitlab.com/greut' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gitlab.com/greut' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'gitlab.com/greut' as const,
}

export type GreutPackage = typeof greutPackage
