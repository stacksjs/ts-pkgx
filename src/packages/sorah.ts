/**
 * **sorah** - pkgx package
 *
 * @domain `github.com/sorah`
 *
 * @install `pkgx github.com/sorah`
 * @name `sorah`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sorah
 * // Or access via domain
 * const samePkg = pantry.githubcomsorah
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sorah"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sorah.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sorahPackage = {
  /**
   * The display name of this package.
   */
  name: 'sorah' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sorah' as const,
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
  installCommand: 'pkgx github.com/sorah' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/sorah' as const,
}

export type SorahPackage = typeof sorahPackage
