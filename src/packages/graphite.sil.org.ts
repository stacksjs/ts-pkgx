export const graphitesilorgPackage = {
  name: 'gr2fonttest' as const,
  domain: 'graphite.sil.org' as const,
  description: 'Graphite is a "smart font" system developed specifically to handle the complexities of lesser-known languages of the world.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/graphite.sil.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) gr2fonttest' as const,
  programs: [
    'gr2fonttest',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.3.14',
  ] as const,
  fullPath: 'graphite.sil.org' as const,
  aliases: [
    'gr2fonttest',
  ] as const,
}

export type GraphitesilorgPackage = typeof graphitesilorgPackage
