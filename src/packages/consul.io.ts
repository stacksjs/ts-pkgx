/**
 * Generated from pkgx.dev data
 */
export const consulioPackage = {
  programs: [
    "consul",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "1.21.0",
    "1.20.6",
    "1.20.5",
    "1.20.4",
    "1.20.3",
    "1.20.2",
    "1.20.1",
    "1.20.0",
    "1.19.2",
    "1.19.1",
  ] as const,
  name: "consul.io" as const,
  domain: "consul.io" as const,
  description: "Package information for consul.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/consul.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +consul.io -- $SHELL -i" as const,
}

export type ConsulioPackage = typeof consulioPackage
