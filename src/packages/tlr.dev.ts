/**
 * Generated from pkgx.dev data
 */
export const tlrdevPackage = {
  programs: [
    "teller",
  ] as const,
  companions: [] as const,
  dependencies: [
    "openssl.org^1.1",
  ] as const,
  versions: [
    "2.0.7",
    "2.0.6",
    "2.0.5",
    "2.0.4",
    "1.5.6",
  ] as const,
  aliases: [
    "teller",
  ] as const,
  name: "tlr.dev" as const,
  domain: "tlr.dev" as const,
  description: "Package information for tlr.dev" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/tlr.dev/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +tlr.dev -- $SHELL -i" as const,
}

export type TlrdevPackage = typeof tlrdevPackage
