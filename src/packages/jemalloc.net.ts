/**
 * **jemalloc.net** - Crafters of fine Open Source products
 *
 * @domain `jemalloc.net`
 *
 * @install `pkgx jemalloc.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jemallocnet
 * console.log(pkg.name)        // "jemalloc.net"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jemalloc-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jemallocnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'jemalloc.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/jemalloc.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jemalloc.net' as const,
  fullPath: 'jemalloc.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx jemalloc.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type JemallocnetPackage = typeof jemallocnetPackage
