/**
 * **amber** - Crafters of fine Open Source products
 *
 * @domain `amber-lang.com`
 *
 * @install `pkgx amber-lang.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.amberlangcom
 * console.log(pkg.name)        // "amber"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/amber-lang-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const amberlangcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'amber' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/amber-lang.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'amber-lang.com' as const,
  fullPath: 'amber-lang.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx amber-lang.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AmberlangcomPackage = typeof amberlangcomPackage
