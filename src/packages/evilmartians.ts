/**
 * **evilmartians** - pkgx package
 *
 * @domain `github.com/evilmartians`
 *
 * @install `pkgx github.com/evilmartians`
 * @name `evilmartians`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.evilmartians
 * // Or access via domain
 * const samePkg = pantry.githubcomevilmartians
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "evilmartians"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/evilmartians.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const evilmartiansPackage = {
  /**
   * The display name of this package.
   */
  name: 'evilmartians' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/evilmartians' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/evilmartians' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/evilmartians' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/evilmartians' as const,
}

export type EvilmartiansPackage = typeof evilmartiansPackage
