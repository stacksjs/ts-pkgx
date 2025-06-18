/**
 * **adnanh** - pkgx package
 *
 * @domain `github.com/adnanh`
 *
 * @install `pkgx github.com/adnanh`
 * @name `adnanh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.adnanh
 * // Or access via domain
 * const samePkg = pantry.githubcomadnanh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "adnanh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/adnanh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const adnanhPackage = {
  /**
   * The display name of this package.
   */
  name: 'adnanh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/adnanh' as const,
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
  installCommand: 'pkgx github.com/adnanh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/adnanh' as const,
}

export type AdnanhPackage = typeof adnanhPackage
