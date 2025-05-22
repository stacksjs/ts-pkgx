/**
 * Generated from pkgx.dev data
 */
export const networkxorgPackage = {
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    "python.org>=3.11",
  ] as const,
  versions: [
    "3.4.2",
    "3.4.1",
    "3.4.0",
    "3.3.0",
    "3.2.1",
  ] as const,
  name: "networkx.org" as const,
  domain: "networkx.org" as const,
  description: "Package information for networkx.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/networkx.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +networkx.org -- $SHELL -i" as const,
}

export type NetworkxorgPackage = typeof networkxorgPackage
