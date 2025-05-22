export const tuistioPackage = {
  name: "tuist.io" as const,
  domain: "tuist.io" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx tuist.io" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "tuist.io" as const,
}

export type TuistioPackage = typeof tuistioPackage
