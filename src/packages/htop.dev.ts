/**
 * Generated from pkgx.dev data
 */
export const htopdevPackage = {
  programs: [
    "htop",
  ] as const,
  companions: [] as const,
  dependencies: [
    "invisible-island.net/ncurses@6",
  ] as const,
  versions: [
    "3.4.1",
    "3.4.0",
    "3.3.0",
    "3.2.2",
    "3.2.1",
  ] as const,
  name: "htop.dev" as const,
  domain: "htop.dev" as const,
  description: "Package information for htop.dev" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/htop.dev/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +htop.dev -- $SHELL -i" as const,
}

export type HtopdevPackage = typeof htopdevPackage
