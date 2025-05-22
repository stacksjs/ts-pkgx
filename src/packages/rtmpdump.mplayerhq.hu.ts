/**
 * Generated from pkgx.dev data
 */
export const rtmpdumpmplayerhqhuPackage = {
  programs: [
    "rtmpdump",
    "rtmpgw",
    "rtmpsrv",
    "rtmpsuck",
  ] as const,
  companions: [] as const,
  dependencies: [
    "openssl.org^1.1",
    "zlib.net",
  ] as const,
  versions: [
    "2.3.0",
    "2.3.0",
  ] as const,
  name: "rtmpdump.mplayerhq.hu" as const,
  domain: "rtmpdump.mplayerhq.hu" as const,
  description: "Package information for rtmpdump.mplayerhq.hu" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/rtmpdump.mplayerhq.hu/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +rtmpdump.mplayerhq.hu -- $SHELL -i" as const,
}

export type RtmpdumpmplayerhqhuPackage = typeof rtmpdumpmplayerhqhuPackage
