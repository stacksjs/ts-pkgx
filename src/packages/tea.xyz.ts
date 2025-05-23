export const teaxyzPackage = {
  name: 'tea.xyz' as const,
  domain: 'tea.xyz' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx tea.xyz' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'tea.xyz' as const,
}

export type TeaxyzPackage = typeof teaxyzPackage
