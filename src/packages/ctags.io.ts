/**
 * Generated from pkgx.dev data
 */
export const ctagsioPackage = {
  programs: [
    "ctags",
  ] as const,
  companions: [] as const,
  dependencies: [
    "digip.org/jansson^2",
    "pyyaml.org/libyaml^0.2",
    "pcre.org/v2^10",
    "gnome.org/libxml2^2",
  ] as const,
  versions: [
    "6.1.0",
  ] as const,
  name: "ctags.io" as const,
  domain: "ctags.io" as const,
  description: "Package information for ctags.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/ctags.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +ctags.io -- $SHELL -i" as const,
}

export type CtagsioPackage = typeof ctagsioPackage
