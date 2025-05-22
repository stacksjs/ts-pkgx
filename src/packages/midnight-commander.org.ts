export const midnightcommanderorgPackage = {
  name: "Midnight Commander" as const,
  domain: "midnight-commander.org" as const,
  description: "Terminal-based visual file manager" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/midnight-commander.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +midnight-commander.org -- $SHELL -i" as const,
  programs: [
    "mc",
    "mcdiff",
    "mcedit",
    "mcview",
  ] as const,
  companions: [] as const,
  dependencies: [
    "invisible-island.net/ncurses",
    "gnome.org/glib>=2.30",
    "gnu.org/gettext>=0.18.2",
  ] as const,
  versions: [
    "4.8.33",
    "4.8.32",
    "4.8.31",
    "4.8.30",
    "4.8.29",
    "4.8.28",
  ] as const,
  fullPath: "midnight-commander.org" as const,
  aliases: [
    "midnight commander",
  ] as const,
}

export type MidnightcommanderorgPackage = typeof midnightcommanderorgPackage
