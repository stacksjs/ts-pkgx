export const astralshPackage = {
  name: "astral.sh" as const,
  domain: "astral.sh" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx astral.sh" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "astral.sh" as const,
}

export type AstralshPackage = typeof astralshPackage
