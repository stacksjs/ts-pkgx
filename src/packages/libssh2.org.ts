/**
 * **libssh2.org** - Crafters of fine Open Source products
 *
 * @domain `libssh2.org`
 *
 * @install `pkgx libssh2.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libssh2org
 * console.log(pkg.name)        // "libssh2.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libssh2-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libssh2orgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libssh2.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libssh2.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libssh2.org' as const,
  fullPath: 'libssh2.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libssh2.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Libssh2orgPackage = typeof libssh2orgPackage
