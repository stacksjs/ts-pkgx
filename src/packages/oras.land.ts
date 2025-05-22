/**
 * Generated from pkgx.dev data
 */
export const oraslandPackage = {
  programs: [
    "oras",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "1.2.3",
    "1.2.2",
    "1.2.1",
    "1.2.0",
  ] as const,
  name: "oras.land" as const,
  domain: "oras.land" as const,
  description: "Package information for oras.land" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/oras.land/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +oras.land -- $SHELL -i" as const,
}

export type OraslandPackage = typeof oraslandPackage
