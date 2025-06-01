/**
 * **libsodium.org** - Crafters of fine Open Source products
 *
 * @domain `libsodium.org`
 *
 * @install `pkgx libsodium.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libsodiumorg
 * console.log(pkg.name)        // "libsodium.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libsodium-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libsodiumorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libsodium.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libsodium.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libsodium.org' as const,
  fullPath: 'libsodium.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libsodium.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibsodiumorgPackage = typeof libsodiumorgPackage
