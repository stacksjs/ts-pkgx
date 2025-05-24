export const applecomPackage = {
  name: 'apple.com' as const,
  domain: 'apple.com' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx apple.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'apple.com' as const,
  aliases: [] as const,
}

export type ApplecomPackage = typeof applecomPackage
