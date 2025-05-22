/**
 * Generated from pkgx.dev data
 */
export const tcpdumporgPackage = {
  programs: [
    "pcap-config",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "1.10.5",
    "1.10.4",
  ] as const,
  aliases: [
    "pcap-config",
  ] as const,
  name: "tcpdump.org" as const,
  domain: "tcpdump.org" as const,
  description: "Package information for tcpdump.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/tcpdump.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +tcpdump.org -- $SHELL -i" as const,
}

export type TcpdumporgPackage = typeof tcpdumporgPackage
