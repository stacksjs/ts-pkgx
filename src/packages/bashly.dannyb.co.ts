export const bashlydannybcoPackage = {
  name: 'bashly' as const,
  domain: 'bashly.dannyb.co' as const,
  description: 'Bash command line framework and CLI generator' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/bashly.dannyb.co/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) bashly' as const,
  programs: [
    'bashly',
  ] as const,
  companions: [
    'gnu.org/bash',
  ] as const,
  dependencies: [
    'ruby-lang.org^3.1',
    'rubygems.org',
  ] as const,
  versions: [
    '1.2.12',
    '1.2.11',
    '1.2.10',
    '1.2.9',
    '1.2.8',
    '1.2.7',
    '1.2.6',
    '1.2.5',
    '1.2.4',
    '1.2.3',
    '1.2.2',
    '1.2.1',
    '1.2.0',
    '1.1.10',
  ] as const,
  fullPath: 'bashly.dannyb.co' as const,
  aliases: [] as const,
}

export type BashlydannybcoPackage = typeof bashlydannybcoPackage
