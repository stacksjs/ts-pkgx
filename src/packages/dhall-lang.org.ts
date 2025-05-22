/**
 * Generated from pkgx.dev data
 */
export const dhalllangorgPackage = {
  programs: [
    "dhall",
  ] as const,
  companions: [] as const,
  dependencies: [
    "invisible-island.net/ncurses^6.4",
    "zlib.net^1.3",
  ] as const,
  versions: [
    "1.42.2",
    "1.42.1",
  ] as const,
  name: "dhall/lang.org" as const,
  domain: "dhall/lang.org" as const,
  description: "Package information for dhall/lang.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/dhall/lang.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +dhall/lang.org -- $SHELL -i" as const,
}

export type DhalllangorgPackage = typeof dhalllangorgPackage
