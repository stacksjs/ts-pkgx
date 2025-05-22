export const gnuorgPackage = {
  name: "gnu.org" as const,
  domain: "gnu.org" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx gnu.org" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "gnu.org" as const,
}

export type GnuorgPackage = typeof gnuorgPackage
