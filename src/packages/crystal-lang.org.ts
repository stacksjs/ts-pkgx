/**
 * Generated from pkgx.dev data
 */
export const crystallangorgPackage = {
  programs: [
    "crystal",
  ] as const,
  companions: [
    "crystal-lang.org/shards",
  ] as const,
  dependencies: [
    "hboehm.info/gc^8",
    "gnu.org/gmp^6",
    "libevent.org^2",
    "pyyaml.org/libyaml^0",
    "llvm.org<17",
    "openssl.org^1.1",
    "pcre.org/v2^10",
    "freedesktop.org/pkg-config^0",
    "sourceware.org/libffi^3",
    "invisible-island.net/ncurses^6",
  ] as const,
  versions: [
    "1.16.3",
    "1.16.2",
    "1.16.1",
    "1.16.0",
    "1.15.1",
    "1.15.0",
    "1.14.1",
    "1.14.0",
    "1.13.3",
    "1.13.2",
    "1.13.1",
    "1.13.0",
    "1.12.2",
    "1.12.1",
    "1.12.0",
    "1.11.2",
    "1.11.1",
    "1.11.0",
    "1.10.1",
  ] as const,
  name: "crystal/lang.org" as const,
  domain: "crystal/lang.org" as const,
  description: "Package information for crystal/lang.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/crystal/lang.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +crystal/lang.org -- $SHELL -i" as const,
}

export type CrystallangorgPackage = typeof crystallangorgPackage
