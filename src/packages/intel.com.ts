export const intelcomPackage = {
  name: 'intel.com' as const,
  domain: 'intel.com' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx intel.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'intel.com' as const,
}

export type IntelcomPackage = typeof intelcomPackage
