/**
 * Generated from pkgx.dev data
 */
export const aria2githubioPackage = {
  programs: [
    "aria2c",
  ] as const,
  companions: [] as const,
  dependencies: [
    "zlib.net^1",
    "openssl.org^1",
    "libexpat.github.io",
    "sqlite.org^3",
  ] as const,
  versions: [
    "1.37.0",
    "1.36.0",
  ] as const,
  aliases: [
    "aria2c",
  ] as const,
  name: "aria2.github.io" as const,
  domain: "aria2.github.io" as const,
  description: "Package information for aria2.github.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/aria2.github.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +aria2.github.io -- $SHELL -i" as const,
}

export type Aria2githubioPackage = typeof aria2githubioPackage
