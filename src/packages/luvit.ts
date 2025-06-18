/**
 * **luvit** - pkgx package
 *
 * @domain `github.com/luvit`
 *
 * @install `pkgx github.com/luvit`
 * @name `luvit`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.luvit
 * // Or access via domain
 * const samePkg = pantry.githubcomluvit
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "luvit"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/luvit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const luvitPackage = {
  /**
   * The display name of this package.
   */
  name: 'luvit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/luvit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/luvit' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/luvit' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/luvit' as const,
}

export type LuvitPackage = typeof luvitPackage
