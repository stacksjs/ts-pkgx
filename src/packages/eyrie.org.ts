export const eyrieorgPackage = {
  name: "eyrie.org" as const,
  domain: "eyrie.org" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx eyrie.org" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "eyrie.org" as const,
}

export type EyrieorgPackage = typeof eyrieorgPackage
