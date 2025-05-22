export const netliborgPackage = {
  name: "netlib.org" as const,
  domain: "netlib.org" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx netlib.org" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "netlib.org" as const,
}

export type NetliborgPackage = typeof netliborgPackage
