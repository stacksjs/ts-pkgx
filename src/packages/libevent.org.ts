/**
 * **libevent.org** - Crafters of fine Open Source products
 *
 * @domain `libevent.org`
 *
 * @install `pkgx libevent.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libeventorg
 * console.log(pkg.name)        // "libevent.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libevent-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libeventorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libevent.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libevent.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libevent.org' as const,
  fullPath: 'libevent.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libevent.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibeventorgPackage = typeof libeventorgPackage
