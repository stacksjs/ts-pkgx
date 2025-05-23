export const nongnuorgPackage = {
  name: 'nongnu.org' as const,
  domain: 'nongnu.org' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx nongnu.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'nongnu.org' as const,
}

export type NongnuorgPackage = typeof nongnuorgPackage
