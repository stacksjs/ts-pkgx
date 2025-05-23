export const iscorgPackage = {
  name: 'isc.org' as const,
  domain: 'isc.org' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx isc.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'isc.org' as const,
}

export type IscorgPackage = typeof iscorgPackage
