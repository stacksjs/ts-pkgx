export const xorgPackage = {
  name: 'x.org' as const,
  domain: 'x.org' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx x.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'x.org' as const,
}

export type XorgPackage = typeof xorgPackage
