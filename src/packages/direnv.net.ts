/**
 * Generated from pkgx.dev data
 */
export const direnvnetPackage = {
  programs: [
    "direnv",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "2.36.0",
    "2.35.0",
    "2.34.0",
    "2.33.0",
    "2.32.3",
    "2.32.2",
  ] as const,
  name: "direnv.net" as const,
  domain: "direnv.net" as const,
  description: "Package information for direnv.net" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/direnv.net/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +direnv.net -- $SHELL -i" as const,
}

export type DirenvnetPackage = typeof direnvnetPackage
