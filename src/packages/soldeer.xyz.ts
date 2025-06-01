/**
 * **soldeer** - Crafters of fine Open Source products
 *
 * @domain `soldeer.xyz`
 *
 * @install `pkgx soldeer.xyz`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.soldeerxyz
 * console.log(pkg.name)        // "soldeer"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/soldeer-xyz.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const soldeerxyzPackage = {
  /**
   * The display name of this package.
   */
  name: 'soldeer' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/soldeer.xyz/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'soldeer.xyz' as const,
  fullPath: 'soldeer.xyz' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx soldeer.xyz' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SoldeerxyzPackage = typeof soldeerxyzPackage
