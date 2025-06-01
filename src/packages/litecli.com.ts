/**
 * **litecli** - Crafters of fine Open Source products
 *
 * @domain `litecli.com`
 *
 * @install `pkgx litecli.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.liteclicom
 * console.log(pkg.name)        // "litecli"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/litecli-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const liteclicomPackage = {
  /**
   * The display name of this package.
   */
  name: 'litecli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/litecli.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'litecli.com' as const,
  fullPath: 'litecli.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx litecli.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LiteclicomPackage = typeof liteclicomPackage
