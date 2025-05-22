export const rpmorgPackage = {
  name: "rpm.org" as const,
  domain: "rpm.org" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx rpm.org" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "rpm.org" as const,
}

export type RpmorgPackage = typeof rpmorgPackage
