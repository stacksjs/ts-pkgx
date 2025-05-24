export const asciinemaorgPackage = {
  name: 'asciinema' as const,
  domain: 'asciinema.org' as const,
  description: 'Record and share terminal sessions' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/asciinema.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) asciinema' as const,
  programs: [
    'asciinema',
  ] as const,
  companions: [] as const,
  dependencies: [
    'python.org^3.12',
  ] as const,
  versions: [
    '2.4.0',
  ] as const,
  fullPath: 'asciinema.org' as const,
  aliases: [] as const,
}

export type AsciinemaorgPackage = typeof asciinemaorgPackage
