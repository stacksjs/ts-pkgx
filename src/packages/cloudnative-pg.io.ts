/**
 * Generated from pkgx.dev data
 */
export const cloudnativepgioPackage = {
  programs: [
    "kubectl-cnpg",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "1.25.1",
    "1.25.0",
    "1.24.3",
  ] as const,
  aliases: [
    "kubectl-cnpg",
  ] as const,
  name: "cloudnative/pg.io" as const,
  domain: "cloudnative/pg.io" as const,
  description: "Package information for cloudnative/pg.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/cloudnative/pg.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +cloudnative/pg.io -- $SHELL -i" as const,
}

export type CloudnativepgioPackage = typeof cloudnativepgioPackage
