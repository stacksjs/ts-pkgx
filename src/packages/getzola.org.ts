/**
 * **zola** - Crafters of fine Open Source products
 *
 * @domain `getzola.org`
 *
 * @install `pkgx getzola.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.getzolaorg
 * console.log(pkg.name)        // "zola"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/getzola-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const getzolaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'zola' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/getzola.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'getzola.org' as const,
  fullPath: 'getzola.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx getzola.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GetzolaorgPackage = typeof getzolaorgPackage
