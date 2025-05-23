export const rbenvorgPackage = {
  name: 'rbenv.org' as const,
  domain: 'rbenv.org' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx rbenv.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'rbenv.org' as const,
}

export type RbenvorgPackage = typeof rbenvorgPackage
