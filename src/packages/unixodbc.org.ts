export const unixodbcorgPackage = {
  name: 'unixodbc.org' as const,
  domain: 'unixodbc.org' as const,
  description: 'The unixODBC Project goals are to develop and promote unixODBC to be the definitive standard for ODBC on non MS Windows platforms.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/unixodbc.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +unixodbc.org -- $SHELL -i' as const,
  programs: [
    'dltest',
    'isql',
    'iusql',
    'odbc_config',
    'odbcinst',
    'slencheck',
  ] as const,
  companions: [] as const,
  dependencies: [
    'gnu.org/libtool',
  ] as const,
  versions: [
    '2.3.12',
    '2.3.11',
  ] as const,
  fullPath: 'unixodbc.org' as const,
  aliases: [] as const,
}

export type UnixodbcorgPackage = typeof unixodbcorgPackage
