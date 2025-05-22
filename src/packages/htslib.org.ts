/**
 * Generated from pkgx.dev data
 */
export const htsliborgPackage = {
  programs: [
    "bgzip",
    "htsfile",
    "tabix",
  ] as const,
  companions: [] as const,
  dependencies: [
    "sourceware.org/bzip2",
    "tukaani.org/xz",
    "zlib.net^1",
    "curl.se>=5",
  ] as const,
  versions: [
    "1.21.0",
    "1.20.0",
    "1.19.1",
    "1.19.0",
    "1.18.0",
  ] as const,
  name: "htslib.org" as const,
  domain: "htslib.org" as const,
  description: "Package information for htslib.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/htslib.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +htslib.org -- $SHELL -i" as const,
}

export type HtsliborgPackage = typeof htsliborgPackage
