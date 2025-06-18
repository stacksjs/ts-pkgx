/**
 * **brona** - pkgx package
 *
 * @domain `github.com/brona`
 *
 * @install `pkgx github.com/brona`
 * @name `brona`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.brona
 * // Or access via domain
 * const samePkg = pantry.githubcombrona
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "brona"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/brona.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bronaPackage = {
  /**
   * The display name of this package.
   */
  name: 'brona' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/brona' as const,
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
  installCommand: 'pkgx github.com/brona' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/brona' as const,
}

export type BronaPackage = typeof bronaPackage
