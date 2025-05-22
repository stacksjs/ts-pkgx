/**
 * Generated from pkgx.dev data
 */
export const dgraphioPackage = {
  programs: [
    "dgraph",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "24.1.2",
    "24.1.1",
    "24.1.0",
    "24.0.5",
    "24.0.4",
    "24.0.2",
    "24.0.1",
    "24.0.0",
    "23.1.1",
    "23.1.0",
  ] as const,
  name: "dgraph.io" as const,
  domain: "dgraph.io" as const,
  description: "Package information for dgraph.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/dgraph.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +dgraph.io -- $SHELL -i" as const,
}

export type DgraphioPackage = typeof dgraphioPackage
