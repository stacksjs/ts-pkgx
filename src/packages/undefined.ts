export const undefinedPackage = {
  name: "undefined" as const,
  domain: "undefined" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx undefined" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "undefined" as const,
}

export type UndefinedPackage = typeof undefinedPackage
