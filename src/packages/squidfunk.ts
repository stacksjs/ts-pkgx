/**
 * **squidfunk** - pkgx package
 *
 * @domain `github.com/squidfunk`
 *
 * @install `pkgx github.com/squidfunk`
 * @name `squidfunk`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.squidfunk
 * // Or access via domain
 * const samePkg = pantry.githubcomsquidfunk
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "squidfunk"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/squidfunk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const squidfunkPackage = {
  /**
   * The display name of this package.
   */
  name: 'squidfunk' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/squidfunk' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/squidfunk' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/squidfunk' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/squidfunk' as const,
}

export type SquidfunkPackage = typeof squidfunkPackage
