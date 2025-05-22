export const digiporgPackage = {
  name: "digip.org" as const,
  domain: "digip.org" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx digip.org" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "digip.org" as const,
}

export type DigiporgPackage = typeof digiporgPackage
