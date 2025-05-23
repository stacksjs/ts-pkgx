export const wixcomPackage = {
  name: 'wix.com' as const,
  domain: 'wix.com' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx wix.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'wix.com' as const,
  aliases: undefined,
}

export type WixcomPackage = typeof wixcomPackage
