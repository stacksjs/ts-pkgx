/**
 * **unbound** - Crafters of fine Open Source products
 *
 * @domain `unbound.net`
 *
 * @install `pkgx unbound.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.unboundnet
 * console.log(pkg.name)        // "unbound"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/unbound-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const unboundnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'unbound' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/unbound.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'unbound.net' as const,
  fullPath: 'unbound.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx unbound.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type UnboundnetPackage = typeof unboundnetPackage
