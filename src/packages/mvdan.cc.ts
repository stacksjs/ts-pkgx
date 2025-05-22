export const mvdanccPackage = {
  name: "mvdan.cc" as const,
  domain: "mvdan.cc" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx mvdan.cc" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "mvdan.cc" as const,
}

export type MvdanccPackage = typeof mvdanccPackage
