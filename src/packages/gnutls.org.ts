/**
 * **gnutls.org** - Crafters of fine Open Source products
 *
 * @domain `gnutls.org`
 *
 * @install `pkgx gnutls.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnutlsorg
 * console.log(pkg.name)        // "gnutls.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnutls-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnutlsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnutls.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/gnutls.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnutls.org' as const,
  fullPath: 'gnutls.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gnutls.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GnutlsorgPackage = typeof gnutlsorgPackage
