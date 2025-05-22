export const nmaporgPackage = {
  name: "nmap.org" as const,
  domain: "nmap.org" as const,
  description: "Port scanning utility for large networks" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/nmap.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +nmap.org -- $SHELL -i" as const,
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
  fullPath: "nmap.org" as const,
}

export type NmaporgPackage = typeof nmaporgPackage
