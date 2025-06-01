/**
 * **pod** - Crafters of fine Open Source products
 *
 * @domain `cocoapods.org`
 *
 * @install `pkgx cocoapods.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cocoapodsorg
 * console.log(pkg.name)        // "pod"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cocoapods-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cocoapodsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'pod' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/cocoapods.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cocoapods.org' as const,
  fullPath: 'cocoapods.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cocoapods.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CocoapodsorgPackage = typeof cocoapodsorgPackage
