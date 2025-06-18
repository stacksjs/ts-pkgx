/**
 * **zegl** - pkgx package
 *
 * @domain `github.com/zegl`
 *
 * @install `pkgx github.com/zegl`
 * @name `zegl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.zegl
 * // Or access via domain
 * const samePkg = pantry.githubcomzegl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "zegl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/zegl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zeglPackage = {
  /**
   * The display name of this package.
   */
  name: 'zegl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/zegl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/zegl' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/zegl' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/zegl' as const,
}

export type ZeglPackage = typeof zeglPackage
