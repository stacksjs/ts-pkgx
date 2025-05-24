export const hunspellgithubioPackage = {
  name: 'hunspell' as const,
  domain: 'hunspell.github.io' as const,
  description: 'Spell checker and morphological analyzer' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hunspell.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +hunspell.github.io -- $SHELL -i' as const,
  programs: [
    'analyze',
    'chmorph',
    'hunspell',
    'hunzip',
    'hzip',
    'munch',
    'unmunch',
  ] as const,
  companions: [] as const,
  dependencies: [
    'gnu.org/readline',
    'invisible-island.net/ncurses',
    'gnu.org/gettext',
  ] as const,
  versions: [
    '1.7.2',
  ] as const,
  fullPath: 'hunspell.github.io' as const,
  aliases: [] as const,
}

export type HunspellgithubioPackage = typeof hunspellgithubioPackage
