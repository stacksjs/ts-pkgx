export const xiphorgPackage = {
  name: 'xiph.org' as const,
  domain: 'xiph.org' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx xiph.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'xiph.org' as const,
}

export type XiphorgPackage = typeof xiphorgPackage
