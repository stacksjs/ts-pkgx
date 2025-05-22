/**
 * Generated from pkgx.dev data
 */
export const liteclicomPackage = {
  programs: [
    "litecli",
  ] as const,
  companions: [] as const,
  dependencies: [
    "pkgx.sh^1",
    "sqlite.org^3.45",
  ] as const,
  versions: [
    "1.15.0",
    "1.14.4",
    "1.14.3",
    "1.14.2",
    "1.14.1",
    "1.14.0",
    "1.13.2",
    "1.13.0",
    "1.12.4",
    "1.12.3",
    "1.12.2",
    "1.11.1",
    "1.11.0",
    "1.10.1",
    "1.10.0",
  ] as const,
  name: "litecli.com" as const,
  domain: "litecli.com" as const,
  description: "Package information for litecli.com" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/litecli.com/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +litecli.com -- $SHELL -i" as const,
}

export type LiteclicomPackage = typeof liteclicomPackage
