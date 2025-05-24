export const convcogithubioPackage = {
  name: 'convco' as const,
  domain: 'convco.github.io' as const,
  description: 'Conventional commits, changelog, versioning, validation' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/convco.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) convco' as const,
  programs: [
    'convco',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.6.2',
    '0.6.1',
    '0.6.0',
    '0.5.2',
    '0.5.1',
    '0.5.0',
    '0.4.3',
    '0.4.2',
    '0.4.1',
  ] as const,
  fullPath: 'convco.github.io' as const,
  aliases: [] as const,
}

export type ConvcogithubioPackage = typeof convcogithubioPackage
