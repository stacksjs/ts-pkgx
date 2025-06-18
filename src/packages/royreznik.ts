/**
 * **royreznik** - pkgx package
 *
 * @domain `github.com/royreznik`
 *
 * @install `pkgx github.com/royreznik`
 * @name `royreznik`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.royreznik
 * // Or access via domain
 * const samePkg = pantry.githubcomroyreznik
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "royreznik"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/royreznik.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const royreznikPackage = {
  /**
   * The display name of this package.
   */
  name: 'royreznik' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/royreznik' as const,
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
  installCommand: 'pkgx github.com/royreznik' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/royreznik' as const,
}

export type RoyreznikPackage = typeof royreznikPackage
