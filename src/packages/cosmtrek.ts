/**
 * **cosmtrek** - pkgx package
 *
 * @domain `github.com/cosmtrek`
 *
 * @install `pkgx github.com/cosmtrek`
 * @name `cosmtrek`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cosmtrek
 * // Or access via domain
 * const samePkg = pantry.githubcomcosmtrek
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cosmtrek"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cosmtrek.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cosmtrekPackage = {
  /**
   * The display name of this package.
   */
  name: 'cosmtrek' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cosmtrek' as const,
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
  installCommand: 'pkgx github.com/cosmtrek' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/cosmtrek' as const,
}

export type CosmtrekPackage = typeof cosmtrekPackage
