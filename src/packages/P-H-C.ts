/**
 * **P-H-C** - pkgx package
 *
 * @domain `github.com/P-H-C`
 *
 * @install `pkgx github.com/P-H-C`
 * @name `P-H-C`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.PHC
 * // Or access via domain
 * const samePkg = pantry.githubcomphc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "P-H-C"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/P-H-C.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pHCPackage = {
  /**
   * The display name of this package.
   */
  name: 'P-H-C' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/P-H-C' as const,
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
  installCommand: 'pkgx github.com/P-H-C' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/P-H-C' as const,
}

export type PHCPackage = typeof pHCPackage
