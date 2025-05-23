export const yadmioPackage = {
  name: 'yadm' as const,
  domain: 'yadm.io' as const,
  description: 'Yet Another Dotfiles Manager' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/yadm.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) yadm' as const,
  programs: [
    'yadm',
  ] as const,
  companions: [] as const,
  dependencies: [
    'git-scm.org',
    'gnu.org/bash',
  ] as const,
  versions: [
    '3.5.0',
    '3.4.0',
    '3.3.0',
    '3.2.2',
  ] as const,
  fullPath: 'yadm.io' as const,
}

export type YadmioPackage = typeof yadmioPackage
