export const opendevorgPackage = {
  name: 'opendev.org' as const,
  domain: 'opendev.org' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx opendev.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'opendev.org' as const,
}

export type OpendevorgPackage = typeof opendevorgPackage
