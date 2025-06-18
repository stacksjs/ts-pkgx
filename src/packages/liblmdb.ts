/**
 * **liblmdb** - Lightning memory-mapped database: key-value data store
 *
 * @domain `openldap.org/liblmdb`
 * @programs `mdb_copy`, `mdb_dump`, `mdb_load`, `mdb_stat`
 * @version `0.9.33` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/openldap-org/liblmdb.md
 *
 * @install `sh <(curl https://pkgx.sh) +openldap.org/liblmdb -- $SHELL -i`
 * @name `liblmdb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.liblmdb
 * // Or access via domain
 * const samePkg = pantry.openldaporgliblmdb
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "liblmdb"
 * console.log(pkg.description) // "Lightning memory-mapped database: key-value dat..."
 * console.log(pkg.programs)    // ["mdb_copy", "mdb_dump", ...]
 * console.log(pkg.versions[0]) // "0.9.33" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openldap-org/liblmdb.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const liblmdbPackage = {
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
  description: 'Lightning memory-mapped database: key-value data store' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openldap.org/liblmdb/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +openldap.org/liblmdb -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mdb_copy',
    'mdb_dump',
    'mdb_load',
    'mdb_stat',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.33',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'openldap.org/liblmdb' as const,
}

export type LiblmdbPackage = typeof liblmdbPackage
