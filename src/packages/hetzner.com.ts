export const hetznercomPackage = {
  name: "hetzner.com" as const,
  domain: "hetzner.com" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx hetzner.com" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "hetzner.com" as const,
}

export type HetznercomPackage = typeof hetznercomPackage
