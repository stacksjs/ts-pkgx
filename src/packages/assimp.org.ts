/**
 * Generated from pkgx.dev data
 */
export const assimporgPackage = {
  programs: [
    "assimp",
  ] as const,
  companions: [] as const,
  dependencies: [
    "zlib.net",
  ] as const,
  versions: [
    "5.4.3",
    "5.4.2",
    "5.4.1",
    "5.4.0",
    "5.3.1",
    "5.3.0",
    "5.2.5",
  ] as const,
  name: "assimp.org" as const,
  domain: "assimp.org" as const,
  description: "Package information for assimp.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/assimp.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +assimp.org -- $SHELL -i" as const,
}

export type AssimporgPackage = typeof assimporgPackage
