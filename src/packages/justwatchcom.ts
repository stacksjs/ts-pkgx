/**
 * **justwatchcom** - pkgx package
 *
 * @domain `github.com/justwatchcom`
 *
 * @install `pkgx github.com/justwatchcom`
 * @name `justwatchcom`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.justwatchcom
 * // Or access via domain
 * const samePkg = pantry.githubcomjustwatchcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "justwatchcom"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/justwatchcom.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const justwatchcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'justwatchcom' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/justwatchcom' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/justwatchcom' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/justwatchcom' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/justwatchcom' as const,
}

export type JustwatchcomPackage = typeof justwatchcomPackage
