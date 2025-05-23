export const netflixcomPackage = {
  name: 'netflix.com' as const,
  domain: 'netflix.com' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx netflix.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'netflix.com' as const,
}

export type NetflixcomPackage = typeof netflixcomPackage
