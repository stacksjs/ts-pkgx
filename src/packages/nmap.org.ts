/**
 * **nmap.org** - Crafters of fine Open Source products
 *
 * @domain `nmap.org`
 *
 * @install `pkgx nmap.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nmaporg
 * console.log(pkg.name)        // "nmap.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nmap-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nmaporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'nmap.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/nmap.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nmap.org' as const,
  fullPath: 'nmap.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx nmap.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NmaporgPackage = typeof nmaporgPackage
