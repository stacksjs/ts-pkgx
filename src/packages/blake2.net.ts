/**
 * **blake2.net** - Go home.
 *
 * @domain `blake2.net`
 *
 * @install `pkgx blake2.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.blake2net
 * console.log(pkg.name)        // "blake2.net"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/blake2-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const blake2netPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/blake2.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'blake2.net' as const,
  fullPath: 'blake2.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx blake2.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Blake2netPackage = typeof blake2netPackage
