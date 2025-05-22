export const fluxcdioPackage = {
  name: "fluxcd.io" as const,
  domain: "fluxcd.io" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx fluxcd.io" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "fluxcd.io" as const,
}

export type FluxcdioPackage = typeof fluxcdioPackage
