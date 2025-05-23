export const githubcommasclimasPackage = {
  name: 'mas' as const,
  domain: 'github.com/mas-cli/mas' as const,
  description: ':package: Mac App Store command line interface' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mas-cli/mas/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) mas' as const,
  programs: [
    'mas',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '2.2.2',
    '2.2.1',
    '2.2.0',
    '2.1.0',
    '2.0.0',
    '1.9.0',
    '1.8.8',
    '1.8.7',
  ] as const,
  fullPath: 'github.com/mas-cli/mas' as const,
  aliases: [
    'mas',
    'mas-cli/mas',
  ] as const,
}

export type GithubcommasclimasPackage = typeof githubcommasclimasPackage
