/**
 * **pcap-config** - Crafters of fine Open Source products
 *
 * @domain `tcpdump.org`
 *
 * @install `pkgx tcpdump.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tcpdumporg
 * console.log(pkg.name)        // "pcap-config"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tcpdump-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tcpdumporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'pcap-config' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/tcpdump.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tcpdump.org' as const,
  fullPath: 'tcpdump.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tcpdump.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TcpdumporgPackage = typeof tcpdumporgPackage
