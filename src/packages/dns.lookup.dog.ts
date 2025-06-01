/**
 * **dog** - Crafters of fine Open Source products
 *
 * @domain `dns.lookup.dog`
 *
 * @install `pkgx dns.lookup.dog`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dnslookupdog
 * console.log(pkg.name)        // "dog"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dns-lookup-dog.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dnslookupdogPackage = {
  /**
   * The display name of this package.
   */
  name: 'dog' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/dns.lookup.dog/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dns.lookup.dog' as const,
  fullPath: 'dns.lookup.dog' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx dns.lookup.dog' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DnslookupdogPackage = typeof dnslookupdogPackage
