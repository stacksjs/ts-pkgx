export const githubcomPackage = {
  name: "github.com" as const,
  domain: "github.com" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx github.com" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "github.com" as const,
}

export type GithubcomPackage = typeof githubcomPackage
