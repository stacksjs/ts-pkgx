export const furycoPackage = {
  name: 'fury' as const,
  domain: 'fury.co' as const,
  description: 'Gemfury CLI' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fury.co/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) fury' as const,
  programs: [
    'fury',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.23.0',
    '0.22.0',
    '0.21.0',
  ] as const,
  fullPath: 'fury.co' as const,
}

export type FurycoPackage = typeof furycoPackage
