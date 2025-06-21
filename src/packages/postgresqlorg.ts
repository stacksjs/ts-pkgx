/**
 * **postgresql.org** - Package from pantry: postgresql.org
 *
 * @domain `postgresql.org`
 *
 * @install `launchpad install postgresql.org`
 * @dependencies `openssl.org^1.0.1`, `gnu.org/readline`, `zlib.net`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.postgresqlorg
 * console.log(pkg.name)        // "postgresql.org"
 * console.log(pkg.description) // "Package from pantry: postgresql.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/postgresql-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const postgresqlorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'postgresql.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'postgresql.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: postgresql.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install postgresql.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.0.1',
    'gnu.org/readline',
    'zlib.net',
    'lz4.org',
    'gnome.org/libxml2',
    'gnome.org/libxslt',
    'unicode.org^73',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/postgresql.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PostgresqlorgPackage = typeof postgresqlorgPackage
