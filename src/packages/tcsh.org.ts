export const tcshorgPackage = {
  name: 'tcsh.org' as const,
  domain: 'tcsh.org' as const,
  description: 'Enhanced, fully compatible version of the Berkeley C shell' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tcsh.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +tcsh.org -- $SHELL -i' as const,
  programs: [
    'csh',
    'tcsh',
  ] as const,
  companions: [] as const,
  dependencies: [
    'github.com/besser82/libxcrypt@4',
    'invisible-island.net/ncurses@6',
  ] as const,
  versions: [
    '6.24.15',
  ] as const,
  fullPath: 'tcsh.org' as const,
  aliases: [] as const,
}

export type TcshorgPackage = typeof tcshorgPackage
