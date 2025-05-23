export const pkgxshpkgmPackage = {
  name: 'pkgm' as const,
  domain: 'pkgx.sh/pkgm' as const,
  description: 'Install `pkgx` packages to `/usr/local`' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pkgx.sh/pkgm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) pkgm' as const,
  programs: [
    'pkgm',
  ] as const,
  companions: [] as const,
  dependencies: [
    'pkgx.sh^2',
    'curl.se/ca-certs',
  ] as const,
  versions: [
    '0.11.1',
    '0.11.0',
    '0.10.1',
    '0.10.0',
    '0.9.2',
    '0.9.1',
    '0.9.0',
    '0.8.0',
    '0.7.2',
    '0.7.1',
  ] as const,
  fullPath: 'pkgx.sh/pkgm' as const,
  aliases: [
    'pkgm',
  ] as const,
}

export type PkgxshpkgmPackage = typeof pkgxshpkgmPackage
