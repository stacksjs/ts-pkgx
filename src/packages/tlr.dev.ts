export const tlrdevPackage = {
  name: "teller" as const,
  domain: "tlr.dev" as const,
  description: "Cloud native secrets management for developers - never leave your command line for secrets." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/tlr.dev/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) teller" as const,
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
  fullPath: "tlr.dev" as const,
  aliases: [
    "teller",
  ] as const,
}

export type TlrdevPackage = typeof tlrdevPackage
