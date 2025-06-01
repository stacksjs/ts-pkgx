/**
 * **jsonnet** - Crafters of fine Open Source products
 *
 * @domain `jsonnet.org`
 *
 * @install `pkgx jsonnet.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jsonnetorg
 * console.log(pkg.name)        // "jsonnet"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jsonnet-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jsonnetorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'jsonnet' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/jsonnet.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jsonnet.org' as const,
  fullPath: 'jsonnet.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx jsonnet.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type JsonnetorgPackage = typeof jsonnetorgPackage
