export const catborgPackage = {
  name: 'catb.org' as const,
  domain: 'catb.org' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx catb.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'catb.org' as const,
  aliases: [] as const,
}

export type CatborgPackage = typeof catborgPackage
