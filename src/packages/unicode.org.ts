/**
 * Generated from pkgx.dev data
 */
export const unicodeorgPackage = {
  programs: [
    "derb",
    "genbrk",
    "gencfu",
    "gencnval",
    "gendict",
    "genrb",
    "icu-config",
    "icuexportdata",
    "icuinfo",
    "makeconv",
    "pkgdata",
    "uconv",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "77.1.0",
    "76.1.0",
    "75.1.0",
    "74.2.0",
    "74.1.0",
    "73.2.0",
    "71.1.0",
  ] as const,
  name: "unicode.org" as const,
  domain: "unicode.org" as const,
  description: "Package information for unicode.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/unicode.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +unicode.org -- $SHELL -i" as const,
}

export type UnicodeorgPackage = typeof unicodeorgPackage
