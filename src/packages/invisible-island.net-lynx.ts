export const invisibleislandnetlynxPackage = {
  name: "lynx" as const,
  domain: "invisible-island.net/lynx" as const,
  description: "Text-based web browser" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/invisible-island.net/lynx/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) lynx" as const,
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
  fullPath: "invisible-island.net/lynx" as const,
  aliases: [
    "lynx",
  ] as const,
}

export type InvisibleislandnetlynxPackage = typeof invisibleislandnetlynxPackage
