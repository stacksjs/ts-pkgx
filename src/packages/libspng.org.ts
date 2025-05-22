export const libspngorgPackage = {
  name: "libspng.org" as const,
  domain: "libspng.org" as const,
  description: "Simple, modern libpng alternative" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/libspng.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +libspng.org -- $SHELL -i" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    "darwinzlib.net",
    "zlib.net",
  ] as const,
  versions: [
    "0.5.0",
  ] as const,
  fullPath: "libspng.org" as const,
}

export type LibspngorgPackage = typeof libspngorgPackage
