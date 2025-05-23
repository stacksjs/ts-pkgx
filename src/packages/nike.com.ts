export const nikecomPackage = {
  name: 'nike.com' as const,
  domain: 'nike.com' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx nike.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'nike.com' as const,
}

export type NikecomPackage = typeof nikecomPackage
