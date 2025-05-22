/**
 * Generated from pkgx.dev data
 */
export const zshsourceforgeioPackage = {
  programs: [
    "zsh",
  ] as const,
  companions: [] as const,
  dependencies: [
    "invisible-island.net/ncurses",
    "pcre.org",
  ] as const,
  versions: [
    "5.9.0",
  ] as const,
  name: "zsh.sourceforge.io" as const,
  domain: "zsh.sourceforge.io" as const,
  description: "Package information for zsh.sourceforge.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/zsh.sourceforge.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +zsh.sourceforge.io -- $SHELL -i" as const,
}

export type ZshsourceforgeioPackage = typeof zshsourceforgeioPackage
