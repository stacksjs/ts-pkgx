/**
 * **openblas.net** - Crafters of fine Open Source products
 *
 * @domain `openblas.net`
 *
 * @install `pkgx openblas.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openblasnet
 * console.log(pkg.name)        // "openblas.net"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openblas-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openblasnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'openblas.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/openblas.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openblas.net' as const,
  fullPath: 'openblas.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx openblas.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpenblasnetPackage = typeof openblasnetPackage
