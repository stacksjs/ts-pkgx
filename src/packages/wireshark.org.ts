/**
 * **wireshark.org** - Crafters of fine Open Source products
 *
 * @domain `wireshark.org`
 *
 * @install `pkgx wireshark.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wiresharkorg
 * console.log(pkg.name)        // "wireshark.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wireshark-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wiresharkorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'wireshark.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/wireshark.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wireshark.org' as const,
  fullPath: 'wireshark.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx wireshark.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type WiresharkorgPackage = typeof wiresharkorgPackage
