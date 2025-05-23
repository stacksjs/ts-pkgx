export const mvdanccgofumptPackage = {
  name: 'gofumpt' as const,
  domain: 'mvdan.cc/gofumpt' as const,
  description: 'A stricter gofmt' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mvdan.cc/gofumpt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) gofumpt' as const,
  programs: [
    'gofumpt',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.8.0',
    '0.7.0',
  ] as const,
  fullPath: 'mvdan.cc/gofumpt' as const,
  aliases: [
    'gofumpt',
  ] as const,
}

export type MvdanccgofumptPackage = typeof mvdanccgofumptPackage
