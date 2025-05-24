export const jenvbePackage = {
  name: 'jenv' as const,
  domain: 'jenv.be' as const,
  description: 'Manage your Java environment' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jenv.be/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) jenv' as const,
  programs: [
    'jenv',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.5.7',
    '0.5.6',
  ] as const,
  fullPath: 'jenv.be' as const,
  aliases: [] as const,
}

export type JenvbePackage = typeof jenvbePackage
