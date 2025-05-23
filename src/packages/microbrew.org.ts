export const microbreworgPackage = {
  name: 'microbrew.org' as const,
  domain: 'microbrew.org' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx microbrew.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'microbrew.org' as const,
}

export type MicrobreworgPackage = typeof microbreworgPackage
