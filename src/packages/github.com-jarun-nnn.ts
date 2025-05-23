export const githubcomjarunnnnPackage = {
  name: 'nnn' as const,
  domain: 'github.com/jarun/nnn' as const,
  description: 'Tiny, lightning fast, feature-packed file manager' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jarun/nnn/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) nnn' as const,
  programs: [
    'nnn',
  ] as const,
  companions: [] as const,
  dependencies: [
    'invisible-island.net/ncurses@6',
    'gnu.org/readline@8',
  ] as const,
  versions: [
    '5.1.0',
    '5.0.0',
  ] as const,
  fullPath: 'github.com/jarun/nnn' as const,
  aliases: [
    'nnn',
    'jarun/nnn',
  ] as const,
}

export type GithubcomjarunnnnPackage = typeof githubcomjarunnnnPackage
