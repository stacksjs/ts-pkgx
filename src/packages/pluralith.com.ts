/**
 * **pluralith** - Crafters of fine Open Source products
 *
 * @domain `pluralith.com`
 *
 * @install `pkgx pluralith.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pluralithcom
 * console.log(pkg.name)        // "pluralith"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pluralith-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pluralithcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'pluralith' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pluralith.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pluralith.com' as const,
  fullPath: 'pluralith.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pluralith.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PluralithcomPackage = typeof pluralithcomPackage
