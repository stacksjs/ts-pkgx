/**
 * **libwebsockets.org** - Crafters of fine Open Source products
 *
 * @domain `libwebsockets.org`
 *
 * @install `pkgx libwebsockets.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libwebsocketsorg
 * console.log(pkg.name)        // "libwebsockets.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libwebsockets-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libwebsocketsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libwebsockets.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libwebsockets.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libwebsockets.org' as const,
  fullPath: 'libwebsockets.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libwebsockets.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibwebsocketsorgPackage = typeof libwebsocketsorgPackage
