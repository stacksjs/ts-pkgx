/**
 * Generated from pkgx.dev data
 */
export const moshorgPackage = {
  programs: [
    "mosh-client",
    "mosh-server",
  ] as const,
  companions: [] as const,
  dependencies: [
    "protobuf.dev@26.1.0",
    "invisible-island.net/ncurses@6",
    "zlib.net@1.3",
    "linuxopenssl.org@3",
    "openssl.org@3",
  ] as const,
  versions: [
    "1.4.0",
  ] as const,
  name: "mosh.org" as const,
  domain: "mosh.org" as const,
  description: "Package information for mosh.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/mosh.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +mosh.org -- $SHELL -i" as const,
}

export type MoshorgPackage = typeof moshorgPackage
