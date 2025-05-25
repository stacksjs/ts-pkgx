export const zshsourceforgeioPackage = {
  name: 'zsh' as const,
  domain: 'zsh.sourceforge.io' as const,
  description: 'UNIX shell (command interpreter)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/zsh.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) zsh' as const,
  programs: [
    'zsh',
  ] as const,
  companions: [] as const,
  dependencies: [
    'invisible-island.net/ncurses',
    'pcre.org',
  ] as const,
  versions: [
    '5.9.0',
  ] as const,
  fullPath: 'zsh.sourceforge.io' as const,
  aliases: [] as const,
}

export type ZshsourceforgeioPackage = typeof zshsourceforgeioPackage
