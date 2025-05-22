/**
 * Generated from pkgx.dev data
 */
export const tldrshPackage = {
  programs: [
    "tldr",
  ] as const,
  companions: [] as const,
  dependencies: [
    "linuxsourceware.org/bzip2^1",
    "sourceware.org/bzip2^1",
    "libzip.org^1.9.2",
    "curl.se",
  ] as const,
  versions: [
    "1.6.1",
    "1.6.0",
    "1.5.0",
  ] as const,
  name: "tldr.sh" as const,
  domain: "tldr.sh" as const,
  description: "Package information for tldr.sh" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/tldr.sh/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +tldr.sh -- $SHELL -i" as const,
}

export type TldrshPackage = typeof tldrshPackage
