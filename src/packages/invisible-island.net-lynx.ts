/**
 * Generated from pkgx.dev data
 */
export const invisibleislandnetlynxPackage = {
  programs: [
    "lynx",
  ] as const,
  companions: [] as const,
  dependencies: [
    "openssl.org^3",
    "invisible-island.net/ncurses^6",
  ] as const,
  versions: [
    "2.9.2",
  ] as const,
  aliases: [
    "lynx",
  ] as const,
  name: "invisible/island.net-lynx" as const,
  domain: "invisible/island.net-lynx" as const,
  description: "Package information for invisible/island.net-lynx" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/invisible/island.net-lynx/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +invisible/island.net-lynx -- $SHELL -i" as const,
}

export type InvisibleislandnetlynxPackage = typeof invisibleislandnetlynxPackage
