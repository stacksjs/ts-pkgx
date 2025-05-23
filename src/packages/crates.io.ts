export const cratesioPackage = {
  name: 'crates.io' as const,
  domain: 'crates.io' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx crates.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'crates.io' as const,
}

export type CratesioPackage = typeof cratesioPackage
