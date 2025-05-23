export const elvshPackage = {
  name: 'elvish' as const,
  domain: 'elv.sh' as const,
  description: 'Powerful scripting language & versatile interactive shell' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/elv.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) elvish' as const,
  programs: [
    'elvish',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.21.0',
    '0.20.1',
    '0.20.0',
    '0.19.2',
  ] as const,
  fullPath: 'elv.sh' as const,
  aliases: [
    'elvish',
  ] as const,
}

export type ElvshPackage = typeof elvshPackage
