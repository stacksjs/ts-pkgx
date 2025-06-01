/**
 * **wunderctl** - Crafters of fine Open Source products
 *
 * @domain `wundergraph.com`
 *
 * @install `pkgx wundergraph.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wundergraphcom
 * console.log(pkg.name)        // "wunderctl"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wundergraph-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wundergraphcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'wunderctl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/wundergraph.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wundergraph.com' as const,
  fullPath: 'wundergraph.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx wundergraph.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type WundergraphcomPackage = typeof wundergraphcomPackage
