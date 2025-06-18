/**
 * **OutOfBedlam** - pkgx package
 *
 * @domain `github.com/OutOfBedlam`
 *
 * @install `pkgx github.com/OutOfBedlam`
 * @name `OutOfBedlam`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.OutOfBedlam
 * // Or access via domain
 * const samePkg = pantry.githubcomoutofbedlam
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "OutOfBedlam"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/OutOfBedlam.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const outOfBedlamPackage = {
  /**
   * The display name of this package.
   */
  name: 'OutOfBedlam' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/OutOfBedlam' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/OutOfBedlam' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/OutOfBedlam' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/OutOfBedlam' as const,
}

export type OutOfBedlamPackage = typeof outOfBedlamPackage
