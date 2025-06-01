/**
 * **OpenSSL** - Crafters of fine Open Source products
 *
 * @domain `openssl.org`
 *
 * @install `pkgx openssl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opensslorg
 * console.log(pkg.name)        // "OpenSSL"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openssl-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opensslorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'OpenSSL' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/openssl.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openssl.org' as const,
  fullPath: 'openssl.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx openssl.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpensslorgPackage = typeof opensslorgPackage
