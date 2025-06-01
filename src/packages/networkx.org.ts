/**
 * **networkx.org** - Crafters of fine Open Source products
 *
 * @domain `networkx.org`
 *
 * @install `pkgx networkx.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.networkxorg
 * console.log(pkg.name)        // "networkx.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/networkx-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const networkxorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'networkx.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/networkx.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'networkx.org' as const,
  fullPath: 'networkx.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx networkx.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NetworkxorgPackage = typeof networkxorgPackage
