export const charmshPackage = {
  name: 'charm.sh' as const,
  domain: 'charm.sh' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx charm.sh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'charm.sh' as const,
}

export type CharmshPackage = typeof charmshPackage
