/**
 * **ldap** - Crafters of fine Open Source products
 *
 * @domain `openldap.org`
 *
 * @install `pkgx openldap.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openldaporg
 * console.log(pkg.name)        // "ldap"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openldap-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openldaporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'ldap' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/openldap.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openldap.org' as const,
  fullPath: 'openldap.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx openldap.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpenldaporgPackage = typeof openldaporgPackage
