/**
 * Generated from pkgx.dev data
 */
export const libspngorgPackage = {
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    "darwinzlib.net",
    "zlib.net",
  ] as const,
  versions: [
    "0.5.0",
  ] as const,
  name: "libspng.org" as const,
  domain: "libspng.org" as const,
  description: "Package information for libspng.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/libspng.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +libspng.org -- $SHELL -i" as const,
}

export type LibspngorgPackage = typeof libspngorgPackage
