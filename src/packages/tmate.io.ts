/**
 * Generated from pkgx.dev data
 */
export const tmateioPackage = {
  programs: [
    "tmate",
  ] as const,
  companions: [] as const,
  dependencies: [
    "libevent.org^2.0",
    "invisible-island.net/ncurses@6",
    "msgpack.org@6",
    "libssh.org@0",
  ] as const,
  versions: [
    "2.4.0",
  ] as const,
  name: "tmate.io" as const,
  domain: "tmate.io" as const,
  description: "Package information for tmate.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/tmate.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +tmate.io -- $SHELL -i" as const,
}

export type TmateioPackage = typeof tmateioPackage
