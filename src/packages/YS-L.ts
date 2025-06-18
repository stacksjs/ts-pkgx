/**
 * **YS-L** - pkgx package
 *
 * @domain `github.com/YS-L`
 *
 * @install `pkgx github.com/YS-L`
 * @name `YS-L`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.YSL
 * // Or access via domain
 * const samePkg = pantry.githubcomysl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "YS-L"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/YS-L.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ySLPackage = {
  /**
   * The display name of this package.
   */
  name: 'YS-L' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/YS-L' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/YS-L' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/YS-L' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/YS-L' as const,
}

export type YSLPackage = typeof ySLPackage
