export const hjsongithubioPackage = {
  name: 'hjson' as const,
  domain: 'hjson.github.io' as const,
  description: 'Hjson for Rust' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hjson.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) hjson' as const,
  programs: [
    'hjson',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.1.0',
    '1.0.0',
  ] as const,
  fullPath: 'hjson.github.io' as const,
  aliases: [] as const,
}

export type HjsongithubioPackage = typeof hjsongithubioPackage
