/**
 * **liblmdb** - Package from pantry: openldap.org/liblmdb
 *
 * @domain `openldap.org/liblmdb`
 *
 * @install `launchpad install openldap.org/liblmdb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openldaporgliblmdb
 * console.log(pkg.name)        // "liblmdb"
 * console.log(pkg.description) // "Package from pantry: openldap.org/liblmdb"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openldap-org/liblmdb.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openldaporgliblmdbPackage = {
  /**
   * The display name of this package.
   */
  name: 'liblmdb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openldap.org/liblmdb' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: openldap.org/liblmdb' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install openldap.org/liblmdb' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +openldap.org/liblmdb -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install openldap.org/liblmdb' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openldap.org/liblmdb/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenldaporgliblmdbPackage = typeof openldaporgliblmdbPackage
