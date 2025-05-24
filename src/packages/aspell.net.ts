export const aspellnetPackage = {
  name: 'aspell.net' as const,
  domain: 'aspell.net' as const,
  description: 'Spell checker with better logic than ispell' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/aspell.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +aspell.net -- $SHELL -i' as const,
  programs: [
    'aspell',
    'aspell-import',
    'precat',
    'preunzip',
    'prezip',
    'prezip-bin',
    'pspell-config',
    'run-with-aspell',
    'word-list-compress',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.60.8.1',
    '0.60.8',
  ] as const,
  fullPath: 'aspell.net' as const,
  aliases: [] as const,
}

export type AspellnetPackage = typeof aspellnetPackage
