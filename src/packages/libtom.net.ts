/**
 * **libtom.net** - Go home.
 *
 * @domain `libtom.net`
 *
 * @install `pkgx libtom.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libtomnet
 * console.log(pkg.name)        // "libtom.net"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libtom-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libtomnetPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libtom.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libtom.net' as const,
  fullPath: 'libtom.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libtom.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibtomnetPackage = typeof libtomnetPackage
