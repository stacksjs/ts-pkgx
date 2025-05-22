/**
 * Generated from pkgx.dev data
 */
export const bitcoinorgPackage = {
  programs: [
    "bitcoin-cli",
    "bitcoin-tx",
    "bitcoin-util",
    "bitcoin-wallet",
    "bitcoind",
  ] as const,
  companions: [] as const,
  dependencies: [
    "oracle.com/berkeley-db^18",
    "boost.org^1",
    "libevent.org^2",
    "zeromq.org^4",
    "sqlite.org^3",
    "linuxgnu.org/gcc/libstdcxx",
    "gnu.org/gcc/libstdcxx",
  ] as const,
  versions: [
    "29.0.0",
    "28.1.0",
    "28.0.0",
    "27.2.0",
    "27.1.0",
    "27.0.0",
    "26.2.0",
    "26.1.0",
    "26.0.0",
    "25.2.0",
    "25.1.0",
    "25.0.0",
    "24.2.0",
    "24.1.0",
    "24.0.1",
    "23.2.0",
  ] as const,
  name: "bitcoin.org" as const,
  domain: "bitcoin.org" as const,
  description: "Package information for bitcoin.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/bitcoin.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +bitcoin.org -- $SHELL -i" as const,
}

export type BitcoinorgPackage = typeof bitcoinorgPackage
