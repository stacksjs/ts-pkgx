/**
 * **bitcoin** - Crafters of fine Open Source products
 *
 * @domain `bitcoin.org`
 *
 * @install `pkgx bitcoin.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.bitcoinorg
 * console.log(pkg.name)        // "bitcoin"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bitcoin-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bitcoinorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'bitcoin' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/bitcoin.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bitcoin.org' as const,
  fullPath: 'bitcoin.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx bitcoin.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type BitcoinorgPackage = typeof bitcoinorgPackage
