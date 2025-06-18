/**
 * **libpq** - pkgx package
 *
 * @domain `postgresql.org/libpq`
 * @version `17.0.0` (4 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/postgresql-org/libpq.md
 *
 * @install `sh <(curl https://pkgx.sh) +postgresql.org/libpq -- $SHELL -i`
 * @aliases `libpq`
 * @dependencies `kerberos.org`, `openssl.org^1.1`, `zlib.net^1`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libpq
 * // Or access via domain
 * const samePkg = pantry.postgresqlorglibpq
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "postgresql.org/libpq"
 * console.log(pkg.versions[0]) // "17.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/postgresql-org/libpq.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libpqPackage = {
  /**
   * The display name of this package.
   */
  name: 'postgresql.org/libpq' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'postgresql.org/libpq' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from postgresql.org/libpq' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/postgresql.org/libpq/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +postgresql.org/libpq -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'kerberos.org',
    'openssl.org^1.1',
    'zlib.net^1',
    'unicode.org^71',
    'linuxgnu.org/readline',
    'gnu.org/readline',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '17.0.0',
    '16.1.0',
    '16.0.0',
    '15.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libpq',
  ] as const,
  fullPath: 'postgresql.org/libpq' as const,
}

export type LibpqPackage = typeof libpqPackage
