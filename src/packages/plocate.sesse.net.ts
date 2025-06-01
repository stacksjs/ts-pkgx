/**
 * **plocate.sesse.net** - Crafters of fine Open Source products
 *
 * @domain `plocate.sesse.net`
 *
 * @install `pkgx plocate.sesse.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.plocatesessenet
 * console.log(pkg.name)        // "plocate.sesse.net"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/plocate-sesse-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const plocatesessenetPackage = {
  /**
   * The display name of this package.
   */
  name: 'plocate.sesse.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/plocate.sesse.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'plocate.sesse.net' as const,
  fullPath: 'plocate.sesse.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx plocate.sesse.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PlocatesessenetPackage = typeof plocatesessenetPackage
