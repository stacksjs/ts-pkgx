export const debianorgPackage = {
  name: 'debian.org' as const,
  domain: 'debian.org' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx debian.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'debian.org' as const,
}

export type DebianorgPackage = typeof debianorgPackage
