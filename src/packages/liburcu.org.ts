/**
 * **liburcu** - Crafters of fine Open Source products
 *
 * @domain `liburcu.org`
 *
 * @install `pkgx liburcu.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.liburcuorg
 * console.log(pkg.name)        // "liburcu"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/liburcu-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const liburcuorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'liburcu' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/liburcu.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'liburcu.org' as const,
  fullPath: 'liburcu.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx liburcu.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LiburcuorgPackage = typeof liburcuorgPackage
