/**
 * Generated from pkgx.dev data
 */
export const openpmixgithubioPackage = {
  programs: [
    "palloc",
    "pattrs",
    "pctrl",
    "pevent",
    "plookup",
    "pmix_info",
    "pmixcc",
    "pps",
    "pquery",
  ] as const,
  companions: [] as const,
  dependencies: [
    "open-mpi.org/hwloc^2.10",
    "libevent.org^2.1",
    "zlib.net^1.3",
  ] as const,
  versions: [
    "6.0.0",
    "5.0.8",
    "5.0.7",
    "5.0.6",
    "5.0.5",
    "5.0.4",
    "5.0.3",
    "5.0.2",
    "5.0.1",
  ] as const,
  name: "openpmix.github.io" as const,
  domain: "openpmix.github.io" as const,
  description: "Package information for openpmix.github.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/openpmix.github.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +openpmix.github.io -- $SHELL -i" as const,
}

export type OpenpmixgithubioPackage = typeof openpmixgithubioPackage
