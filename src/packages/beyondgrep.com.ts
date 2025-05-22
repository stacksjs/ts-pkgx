/**
 * Generated from pkgx.dev data
 */
export const beyondgrepcomPackage = {
  programs: [
    "ack",
  ] as const,
  companions: [] as const,
  dependencies: [
    "perl.org",
  ] as const,
  versions: [
    "3.8.1",
    "3.8.0",
    "3.7.0",
    "3.6.0",
  ] as const,
  aliases: [
    "ack",
  ] as const,
  name: "beyondgrep.com" as const,
  domain: "beyondgrep.com" as const,
  description: "Package information for beyondgrep.com" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/beyondgrep.com/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +beyondgrep.com -- $SHELL -i" as const,
}

export type BeyondgrepcomPackage = typeof beyondgrepcomPackage
