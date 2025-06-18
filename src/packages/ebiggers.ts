/**
 * **ebiggers** - pkgx package
 *
 * @domain `github.com/ebiggers`
 *
 * @install `pkgx github.com/ebiggers`
 * @name `ebiggers`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ebiggers
 * // Or access via domain
 * const samePkg = pantry.githubcomebiggers
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ebiggers"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ebiggers.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ebiggersPackage = {
  /**
   * The display name of this package.
   */
  name: 'ebiggers' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ebiggers' as const,
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
  installCommand: 'pkgx github.com/ebiggers' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/ebiggers' as const,
}

export type EbiggersPackage = typeof ebiggersPackage
