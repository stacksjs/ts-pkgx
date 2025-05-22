/**
 * Generated from pkgx.dev data
 */
export const scryerplPackage = {
  programs: [
    "scryer-prolog",
  ] as const,
  companions: [] as const,
  dependencies: [
    "openssl.org^1.1",
  ] as const,
  versions: [
    "0.9.4",
  ] as const,
  aliases: [
    "scryer prolog",
  ] as const,
  name: "scryer.pl" as const,
  domain: "scryer.pl" as const,
  description: "Package information for scryer.pl" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/scryer.pl/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +scryer.pl -- $SHELL -i" as const,
}

export type ScryerplPackage = typeof scryerplPackage
