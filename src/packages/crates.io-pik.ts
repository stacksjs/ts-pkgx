export const cratesiopikPackage = {
  name: 'pik' as const,
  domain: 'crates.io/pik' as const,
  description: 'Process Interactive Kill' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/pik/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) pik' as const,
  programs: [
    'pik',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.23.1',
    '0.23.0',
    '0.22.0',
    '0.21.0',
    '0.20.0',
    '0.19.0',
    '0.18.1',
    '0.18.0',
    '0.17.0',
    '0.16.0',
  ] as const,
  fullPath: 'crates.io/pik' as const,
  aliases: [
    'pik',
  ] as const,
}

export type CratesiopikPackage = typeof cratesiopikPackage
