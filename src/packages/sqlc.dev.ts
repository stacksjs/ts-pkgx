export const sqlcdevPackage = {
  name: 'sqlc' as const,
  domain: 'sqlc.dev' as const,
  description: 'Generate type-safe code from SQL' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sqlc.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) sqlc' as const,
  programs: [
    'sqlc',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.29.0',
    '1.28.0',
    '1.27.0',
  ] as const,
  fullPath: 'sqlc.dev' as const,
  aliases: [] as const,
}

export type SqlcdevPackage = typeof sqlcdevPackage
