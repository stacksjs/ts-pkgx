/**
 * Generated from pkgx.dev data
 */
export const kptdevPackage = {
  programs: [
    "kpt",
  ] as const,
  companions: [] as const,
  dependencies: [
    "git-scm.org",
  ] as const,
  versions: [
    "0.39.3",
  ] as const,
  name: "kpt.dev" as const,
  domain: "kpt.dev" as const,
  description: "Package information for kpt.dev" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/kpt.dev/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +kpt.dev -- $SHELL -i" as const,
}

export type KptdevPackage = typeof kptdevPackage
