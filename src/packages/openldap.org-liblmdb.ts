/**
 * **openldap.org-liblmdb** - Go home.
 *
 * @domain `openldap.org-liblmdb`
 *
 * @install `pkgx openldap.org-liblmdb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openldaporgliblmdb
 * console.log(pkg.name)        // "openldap.org-liblmdb"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openldap-org-liblmdb.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openldaporgliblmdbPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/openldap.org-liblmdb/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openldap.org-liblmdb' as const,
  fullPath: 'openldap.org-liblmdb' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx openldap.org-liblmdb' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpenldaporgliblmdbPackage = typeof openldaporgliblmdbPackage
