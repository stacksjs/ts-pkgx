export const carapaceshPackage = {
  name: 'carapace' as const,
  domain: 'carapace.sh' as const,
  description: 'Multi-shell multi-command argument completer' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/carapace.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) carapace' as const,
  programs: [
    'carapace',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.3.2',
    '1.3.1',
    '1.3.0',
    '1.2.1',
    '1.2.0',
    '1.1.1',
    '1.1.0',
    '1.0.7',
    '1.0.6',
    '1.0.5',
    '1.0.4',
  ] as const,
  fullPath: 'carapace.sh' as const,
  aliases: [] as const,
}

export type CarapaceshPackage = typeof carapaceshPackage
