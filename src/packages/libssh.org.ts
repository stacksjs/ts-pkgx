/**
 * **libssh.org** - Crafters of fine Open Source products
 *
 * @domain `libssh.org`
 *
 * @install `pkgx libssh.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libsshorg
 * console.log(pkg.name)        // "libssh.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libssh-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libsshorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libssh.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libssh.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libssh.org' as const,
  fullPath: 'libssh.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libssh.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibsshorgPackage = typeof libsshorgPackage
