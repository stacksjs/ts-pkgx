/**
 * **ivmai** - pkgx package
 *
 * @domain `github.com/ivmai`
 *
 * @install `pkgx github.com/ivmai`
 * @name `ivmai`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ivmai
 * // Or access via domain
 * const samePkg = pantry.githubcomivmai
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ivmai"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ivmai.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ivmaiPackage = {
  /**
   * The display name of this package.
   */
  name: 'ivmai' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ivmai' as const,
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
  installCommand: 'pkgx github.com/ivmai' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/ivmai' as const,
}

export type IvmaiPackage = typeof ivmaiPackage
