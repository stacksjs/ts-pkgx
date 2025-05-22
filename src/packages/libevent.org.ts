/**
 * Generated from pkgx.dev data
 */
export const libeventorgPackage = {
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    "openssl.org^1.1",
  ] as const,
  versions: [
    "2.1.12",
  ] as const,
  name: "libevent.org" as const,
  domain: "libevent.org" as const,
  description: "Package information for libevent.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/libevent.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +libevent.org -- $SHELL -i" as const,
}

export type LibeventorgPackage = typeof libeventorgPackage
