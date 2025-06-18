/**
 * **astanin** - pkgx package
 *
 * @domain `github.com/astanin`
 *
 * @install `pkgx github.com/astanin`
 * @name `astanin`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.astanin
 * // Or access via domain
 * const samePkg = pantry.githubcomastanin
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "astanin"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/astanin.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const astaninPackage = {
  /**
   * The display name of this package.
   */
  name: 'astanin' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/astanin' as const,
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
  installCommand: 'pkgx github.com/astanin' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/astanin' as const,
}

export type AstaninPackage = typeof astaninPackage
