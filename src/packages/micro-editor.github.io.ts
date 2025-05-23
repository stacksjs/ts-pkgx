export const microeditorgithubioPackage = {
  name: 'micro' as const,
  domain: 'micro-editor.github.io' as const,
  description: 'A modern and intuitive terminal-based text editor' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/micro-editor.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) micro' as const,
  programs: [
    'micro',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '2.0.14',
    '2.0.13',
    '2.0.12',
    '2.0.11',
  ] as const,
  fullPath: 'micro-editor.github.io' as const,
}

export type MicroeditorgithubioPackage = typeof microeditorgithubioPackage
