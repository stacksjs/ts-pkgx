export const postgresqlorgPackage = {
  name: 'postgresql.org' as const,
  domain: 'postgresql.org' as const,
  description: 'Mirror of the official PostgreSQL GIT repository. Note that this is just a *mirror* - we don\'t work with pull requests on github. To contribute, please see https://wiki.postgresql.org/wiki/Submitting_a_Patch' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/postgresql.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +postgresql.org -- $SHELL -i' as const,
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
  dependencies: [
    'openssl.org^1.0.1',
    'gnu.org/readline',
    'zlib.net',
    'lz4.org',
    'gnome.org/libxml2',
    'gnome.org/libxslt',
    'unicode.org^73',
  ] as const,
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
  fullPath: 'postgresql.org' as const,
}

export type PostgresqlorgPackage = typeof postgresqlorgPackage
