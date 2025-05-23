export const nixosorgPackage = {
  name: 'nixos.org' as const,
  domain: 'nixos.org' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx nixos.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'nixos.org' as const,
}

export type NixosorgPackage = typeof nixosorgPackage
