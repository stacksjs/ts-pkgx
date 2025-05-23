export const apacheorgPackage = {
  name: 'apache.org' as const,
  domain: 'apache.org' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx apache.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'apache.org' as const,
}

export type ApacheorgPackage = typeof apacheorgPackage
