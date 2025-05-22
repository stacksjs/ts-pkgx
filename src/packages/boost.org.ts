/**
 * Generated from pkgx.dev data
 */
export const boostorgPackage = {
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    "facebook.com/zstd^1",
  ] as const,
  versions: [
    "1.88.0",
    "1.87.0",
    "1.86.0",
    "1.85.0",
    "1.84.0",
    "1.83.0",
    "1.82.0",
    "1.81.0",
  ] as const,
  name: "boost.org" as const,
  domain: "boost.org" as const,
  description: "Package information for boost.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/boost.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +boost.org -- $SHELL -i" as const,
}

export type BoostorgPackage = typeof boostorgPackage
