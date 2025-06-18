/**
 * **upa** - pkgx package
 *
 * @domain `github.com/upa`
 *
 * @install `pkgx github.com/upa`
 * @name `upa`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.upa
 * // Or access via domain
 * const samePkg = pantry.githubcomupa
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "upa"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/upa.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const upaPackage = {
  /**
   * The display name of this package.
   */
  name: 'upa' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/upa' as const,
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
  installCommand: 'pkgx github.com/upa' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/upa' as const,
}

export type UpaPackage = typeof upaPackage
