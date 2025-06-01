/**
 * **postgresql.org** - Mirror of the official PostgreSQL GIT repository. Note that this is just a *mirror* - we don't work with pull requests on github. To contribute, please see https://wiki.postgresql.org/wiki/Submitting_a_Patch
 *
 * @domain `postgresql.org`
 * @programs `clusterdb`, `createdb`, `dropdb`, `dropuser`, `ecpg`, ... (+23 more)
 * @version `17.2.0` (12 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/postgresql-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +postgresql.org -- $SHELL -i`
 * @dependencies `openssl.org^1.0.1`, `gnu.org/readline`, `zlib.net`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.postgresqlorg
 * console.log(pkg.name)        // "postgresql.org"
 * console.log(pkg.description) // "Mirror of the official PostgreSQL GIT repositor..."
 * console.log(pkg.programs)    // ["clusterdb", "createdb", ...]
 * console.log(pkg.versions[0]) // "17.2.0" (latest)
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
  description: 'Mirror of the official PostgreSQL GIT repository. Note that this is just a *mirror* - we don\'t work with pull requests on github. To contribute, please see https://wiki.postgresql.org/wiki/Submitting_a_Patch' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/postgresql.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +postgresql.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'clusterdb',
    'createdb',
    'dropdb',
    'dropuser',
    'ecpg',
    'initdb',
    'pg_archivecleanup',
    'pg_basebackup',
    'pg_config',
    'pg_controldata',
    'pg_ctl',
    'pg_dump',
    'pg_dumpall',
    'pg_isready',
    'pg_receivewal',
    'pg_recvlogical',
    'pg_resetwal',
    'pg_restore',
    'pg_rewind',
    'pg_test_fsync',
    'pg_test_timing',
    'pg_upgrade',
    'pg_waldump',
    'pgbench',
    'postgres',
    'psql',
    'reindexdb',
    'vacuumdb',
  ] as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '17.2.0',
    '17.0.0',
    '16.1.0',
    '16.0.0',
    '15.2.0',
    '14.7.0',
    '13.12.0',
    '13.11.0',
    '13.9.0',
    '13.1.0',
    '12.14.0',
    '11.19.0',
  ] as const,
  aliases: [] as const,
  fullPath: 'postgresql.org' as const,
}

export type PostgresqlorgPackage = typeof postgresqlorgPackage
