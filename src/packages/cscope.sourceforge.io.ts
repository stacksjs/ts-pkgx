/**
 * Generated from pkgx.dev data
 */
export const cscopesourceforgeioPackage = {
  programs: [
    "cscope",
    "ocs",
  ] as const,
  companions: [] as const,
  dependencies: [
    "invisible-island.net/ncurses",
  ] as const,
  versions: [
    "15.9.0",
  ] as const,
  name: "cscope.sourceforge.io" as const,
  domain: "cscope.sourceforge.io" as const,
  description: "Package information for cscope.sourceforge.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/cscope.sourceforge.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +cscope.sourceforge.io -- $SHELL -i" as const,
}

export type CscopesourceforgeioPackage = typeof cscopesourceforgeioPackage
