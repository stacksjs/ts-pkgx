/**
 * Generated from pkgx.dev data
 */
export const gnutlsorgPackage = {
  programs: [
    "certtool",
    "danetool",
    "gnutls-cli",
    "gnutls-cli-debug",
    "gnutls-serv",
    "ocsptool",
    "p11tool",
    "psktool",
  ] as const,
  companions: [] as const,
  dependencies: [
    "freedesktop.org/p11-kit",
    "gnu.org/libidn2",
    "gnu.org/libunistring^1",
    "gnu.org/libtasn1^4",
    "gnu.org/nettle",
    "gnu.org/gettext",
    "gnu.org/gmp",
    "unbound.net^1",
    "curl.se/ca-certs",
  ] as const,
  versions: [
    "3.8.9",
    "3.8.7",
    "3.8.6",
    "3.8.5",
    "3.8.4",
    "3.8.3",
    "3.8.2",
    "3.8.1",
    "3.7.10",
    "3.6.16",
  ] as const,
  name: "gnutls.org" as const,
  domain: "gnutls.org" as const,
  description: "Package information for gnutls.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/gnutls.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +gnutls.org -- $SHELL -i" as const,
}

export type GnutlsorgPackage = typeof gnutlsorgPackage
