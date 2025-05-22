export const beyondgrepcomPackage = {
  name: "ack" as const,
  domain: "beyondgrep.com" as const,
  description: "ack is a grep-like search tool optimized for source code." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/beyondgrep.com/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) ack" as const,
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
  fullPath: "beyondgrep.com" as const,
  aliases: [
    "ack",
  ] as const,
}

export type BeyondgrepcomPackage = typeof beyondgrepcomPackage
