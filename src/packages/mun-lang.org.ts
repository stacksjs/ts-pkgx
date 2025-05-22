/**
 * Generated from pkgx.dev data
 */
export const munlangorgPackage = {
  programs: [
    "mun",
  ] as const,
  companions: [
    "llvm.org",
  ] as const,
  dependencies: [
    "invisible-island.net/ncurses@6",
    "sourceware.org/libffi@3",
    "gnome.org/libxml2@2",
  ] as const,
  versions: [
    "0.5.0",
  ] as const,
  name: "mun/lang.org" as const,
  domain: "mun/lang.org" as const,
  description: "Package information for mun/lang.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/mun/lang.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +mun/lang.org -- $SHELL -i" as const,
}

export type MunlangorgPackage = typeof munlangorgPackage
