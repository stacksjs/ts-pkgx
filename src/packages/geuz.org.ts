export const geuzorgPackage = {
  name: "geuz.org" as const,
  domain: "geuz.org" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx geuz.org" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "geuz.org" as const,
}

export type GeuzorgPackage = typeof geuzorgPackage
