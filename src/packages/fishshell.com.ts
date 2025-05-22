/**
 * Generated from pkgx.dev data
 */
export const fishshellcomPackage = {
  programs: [
    "fish",
    "fish_indent",
    "fish_key_reader",
  ] as const,
  companions: [] as const,
  dependencies: [
    "gnu.org/gettext",
    "invisible-island.net/ncurses>=6.0",
  ] as const,
  versions: [
    "4.0.2",
    "4.0.1",
    "4.0.0",
    "3.7.1",
    "3.7.0",
    "3.6.4",
    "3.6.3",
    "3.6.2",
    "3.6.1",
    "3.6.0",
    "3.5.1",
  ] as const,
  name: "fishshell.com" as const,
  domain: "fishshell.com" as const,
  description: "Package information for fishshell.com" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/fishshell.com/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +fishshell.com -- $SHELL -i" as const,
}

export type FishshellcomPackage = typeof fishshellcomPackage
