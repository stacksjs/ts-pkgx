export const jfrogcomPackage = {
  name: "jfrog.com" as const,
  domain: "jfrog.com" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx jfrog.com" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "jfrog.com" as const,
}

export type JfrogcomPackage = typeof jfrogcomPackage
