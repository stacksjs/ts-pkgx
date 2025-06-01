/**
 * **kerberos.org** - Crafters of fine Open Source products
 *
 * @domain `kerberos.org`
 *
 * @install `pkgx kerberos.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kerberosorg
 * console.log(pkg.name)        // "kerberos.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kerberos-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kerberosorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'kerberos.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/kerberos.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kerberos.org' as const,
  fullPath: 'kerberos.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx kerberos.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KerberosorgPackage = typeof kerberosorgPackage
