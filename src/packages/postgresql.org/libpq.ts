/**
 * **postgresql.org/libpq** - pkgx package
 *
 * @domain `postgresql.org/libpq`
 * @version `18.0.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install postgresql.org/libpq`
 * @dependencies `kerberos.org`, `openssl.org^1.1`, `zlib.net^1`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.postgresqlorglibpq
 * console.log(pkg.name)        // "postgresql.org/libpq"
 * console.log(pkg.versions[0]) // "18.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/postgresql-org/libpq.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const postgresqlorglibpqPackage = {
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
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/postgresql.org/libpq/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install postgresql.org/libpq' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'kerberos.org',
    'openssl.org^1.1',
    'zlib.net^1',
    'unicode.org^71',
    'linux:gnu.org/readline',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '18.0.0',
    '17.0.0',
    '16.1.0',
    '16.0.0',
    '15.2.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +postgresql.org/libpq -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install postgresql.org/libpq' as const,
}

export type PostgresqlorglibpqPackage = typeof postgresqlorglibpqPackage
