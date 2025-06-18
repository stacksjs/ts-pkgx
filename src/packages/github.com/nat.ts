/**
 * **nat** - pkgx package
 *
 * @domain `github.com/nat`
 *
 * @install `pkgx github.com/nat`
 * @name `nat`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.nat
 * // Or access via domain
 * const samePkg = pantry.githubcomnat
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nat"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nat.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const natPackage = {
  /**
   * The display name of this package.
   */
  name: 'nat' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nat' as const,
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
  installCommand: 'pkgx github.com/nat' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/nat' as const,
}

export type NatPackage = typeof natPackage
