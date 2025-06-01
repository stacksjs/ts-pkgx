/**
 * **nixpacks** - Crafters of fine Open Source products
 *
 * @domain `nixpacks.com`
 *
 * @install `pkgx nixpacks.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nixpackscom
 * console.log(pkg.name)        // "nixpacks"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nixpacks-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nixpackscomPackage = {
  /**
   * The display name of this package.
   */
  name: 'nixpacks' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/nixpacks.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nixpacks.com' as const,
  fullPath: 'nixpacks.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx nixpacks.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NixpackscomPackage = typeof nixpackscomPackage
