export const sfnetPackage = {
  name: 'sf.net' as const,
  domain: 'sf.net' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx sf.net' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'sf.net' as const,
}

export type SfnetPackage = typeof sfnetPackage
