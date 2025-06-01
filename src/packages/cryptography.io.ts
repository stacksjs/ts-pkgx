/**
 * **cryptography.io** - Crafters of fine Open Source products
 *
 * @domain `cryptography.io`
 *
 * @install `pkgx cryptography.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cryptographyio
 * console.log(pkg.name)        // "cryptography.io"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cryptography-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cryptographyioPackage = {
  /**
   * The display name of this package.
   */
  name: 'cryptography.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/cryptography.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cryptography.io' as const,
  fullPath: 'cryptography.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cryptography.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CryptographyioPackage = typeof cryptographyioPackage
