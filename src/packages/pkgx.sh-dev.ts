export const pkgxshdevPackage = {
  name: 'dev' as const,
  domain: 'pkgx.sh' as const,
  description: 'Package information for pkgx.sh/dev' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'sh <(curl https://pkgx.sh) pkgx.sh/dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'pkgx.sh/dev' as const,
  aliases: [
    'dev',
  ] as const,
}

export type PkgxshdevPackage = typeof pkgxshdevPackage
