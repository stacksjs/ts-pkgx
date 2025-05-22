export const ctagsioPackage = {
  name: "ctags" as const,
  domain: "ctags.io" as const,
  description: "A maintained ctags implementation" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/ctags.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) ctags" as const,
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
  fullPath: "ctags.io" as const,
}

export type CtagsioPackage = typeof ctagsioPackage
