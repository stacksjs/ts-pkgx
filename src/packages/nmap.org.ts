/**
 * Generated from pkgx.dev data
 */
export const nmaporgPackage = {
  programs: [
    "nmap",
    "ncat",
    "nping",
  ] as const,
  companions: [] as const,
  dependencies: [
    "openssl.org^1.1",
    "pcre.org/v2^10",
  ] as const,
  versions: [
    "7.97.0",
    "7.96.0",
    "7.95.0",
    "7.94.0",
    "7.93.0",
  ] as const,
  name: "nmap.org" as const,
  domain: "nmap.org" as const,
  description: "Package information for nmap.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/nmap.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +nmap.org -- $SHELL -i" as const,
}

export type NmaporgPackage = typeof nmaporgPackage
