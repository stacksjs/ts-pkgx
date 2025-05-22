/**
 * Generated from pkgx.dev data
 */
export const openvpnnetPackage = {
  programs: [
    "openvpn",
  ] as const,
  companions: [] as const,
  dependencies: [
    "lz4.org^1.9",
    "oberhumer.com/lzo^2.10",
    "openssl.org^1.1",
    "linuxsourceforge.net/net-toolsgithub.com/thom311/libnl",
    "sourceforge.net/net-tools",
    "github.com/thom311/libnl",
  ] as const,
  versions: [
    "2.6.14",
    "2.6.13",
    "2.6.12",
    "2.6.11",
    "2.6.10",
    "2.6.9",
    "2.6.8",
    "2.6.7",
    "2.6.6",
    "2.6.5",
    "2.6.4",
    "2.5.10",
  ] as const,
  name: "openvpn.net" as const,
  domain: "openvpn.net" as const,
  description: "Package information for openvpn.net" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/openvpn.net/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +openvpn.net -- $SHELL -i" as const,
}

export type OpenvpnnetPackage = typeof openvpnnetPackage
