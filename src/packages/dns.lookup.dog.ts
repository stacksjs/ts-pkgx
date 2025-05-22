/**
 * Generated from pkgx.dev data
 */
export const dnslookupdogPackage = {
  programs: [
    "dog",
  ] as const,
  companions: [] as const,
  dependencies: [
    "openssl.org^1.1",
  ] as const,
  versions: [
    "0.1.0",
  ] as const,
  aliases: [
    "dog",
  ] as const,
  name: "dns.lookup.dog" as const,
  domain: "dns.lookup.dog" as const,
  description: "Package information for dns.lookup.dog" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/dns.lookup.dog/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +dns.lookup.dog -- $SHELL -i" as const,
}

export type DnslookupdogPackage = typeof dnslookupdogPackage
