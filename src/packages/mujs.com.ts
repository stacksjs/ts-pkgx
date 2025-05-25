export const mujscomPackage = {
  name: 'mujs' as const,
  domain: 'mujs.com' as const,
  description: 'An embeddable Javascript interpreter in C.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mujs.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +mujs.com -- $SHELL -i' as const,
  programs: [
    'mujs',
    'mujs-pp',
  ] as const,
  companions: [] as const,
  dependencies: [
    'linuxgnu.org/readline~8.1invisible-island.net/ncurses',
    'gnu.org/readline~8.1',
    'invisible-island.net/ncurses',
  ] as const,
  versions: [
    '1.3.6',
    '1.3.5',
    '1.3.4',
    '1.3.3',
  ] as const,
  fullPath: 'mujs.com' as const,
  aliases: [] as const,
}

export type MujscomPackage = typeof mujscomPackage
