/**
 * **consul** - Crafters of fine Open Source products
 *
 * @domain `consul.io`
 *
 * @install `pkgx consul.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.consulio
 * console.log(pkg.name)        // "consul"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/consul-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const consulioPackage = {
  /**
   * The display name of this package.
   */
  name: 'consul' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/consul.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'consul.io' as const,
  fullPath: 'consul.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx consul.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ConsulioPackage = typeof consulioPackage
