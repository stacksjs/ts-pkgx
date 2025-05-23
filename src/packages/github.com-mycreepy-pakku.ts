export const githubcommycreepypakkuPackage = {
  name: 'pakku' as const,
  domain: 'github.com/mycreepy/pakku' as const,
  description: 'pakku is a declarative approach to your system package managers.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mycreepy/pakku/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) pakku' as const,
  programs: [
    'pakku',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.5.0',
    '0.4.2',
    '0.4.1',
    '0.4.0',
    '0.3.1',
    '0.3.0',
    '0.2.0',
    '0.1.0',
  ] as const,
  fullPath: 'github.com/mycreepy/pakku' as const,
  aliases: [
    'pakku',
    'mycreepy/pakku',
  ] as const,
}

export type GithubcommycreepypakkuPackage = typeof githubcommycreepypakkuPackage
