/**
 * **benkehoe** - pkgx package
 *
 * @domain `github.com/benkehoe`
 *
 * @install `pkgx github.com/benkehoe`
 * @name `benkehoe`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.benkehoe
 * // Or access via domain
 * const samePkg = pantry.githubcombenkehoe
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "benkehoe"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/benkehoe.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const benkehoePackage = {
  /**
   * The display name of this package.
   */
  name: 'benkehoe' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/benkehoe' as const,
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
  installCommand: 'pkgx github.com/benkehoe' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/benkehoe' as const,
}

export type BenkehoePackage = typeof benkehoePackage
