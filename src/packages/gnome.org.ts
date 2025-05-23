export const gnomeorgPackage = {
  name: 'gnome.org' as const,
  domain: 'gnome.org' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx gnome.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'gnome.org' as const,
}

export type GnomeorgPackage = typeof gnomeorgPackage
