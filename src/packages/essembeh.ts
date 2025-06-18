/**
 * **essembeh** - pkgx package
 *
 * @domain `github.com/essembeh`
 *
 * @install `pkgx github.com/essembeh`
 * @name `essembeh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.essembeh
 * // Or access via domain
 * const samePkg = pantry.githubcomessembeh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "essembeh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/essembeh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const essembehPackage = {
  /**
   * The display name of this package.
   */
  name: 'essembeh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/essembeh' as const,
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
  installCommand: 'pkgx github.com/essembeh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/essembeh' as const,
}

export type EssembehPackage = typeof essembehPackage
