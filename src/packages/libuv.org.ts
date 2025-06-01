/**
 * **libuv.org** - Crafters of fine Open Source products
 *
 * @domain `libuv.org`
 *
 * @install `pkgx libuv.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libuvorg
 * console.log(pkg.name)        // "libuv.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libuv-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libuvorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libuv.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libuv.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libuv.org' as const,
  fullPath: 'libuv.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libuv.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibuvorgPackage = typeof libuvorgPackage
