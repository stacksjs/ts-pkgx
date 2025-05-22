/**
 * Generated from pkgx.dev data
 */
export const debianorgPackage = {
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  name: "debian.org" as const,
  domain: "debian.org" as const,
  description: "Package information for debian.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/debian.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +debian.org -- $SHELL -i" as const,
}

export type DebianorgPackage = typeof debianorgPackage
