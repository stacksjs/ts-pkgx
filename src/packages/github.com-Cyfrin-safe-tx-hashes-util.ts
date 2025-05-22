export const githubcomcyfrinsafetxhashesutilPackage = {
  name: "safe_hashes" as const,
  domain: "github.com/Cyfrin/safe-tx-hashes-util" as const,
  description: "" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Cyfrin/safe-tx-hashes-util/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) safe_hashes" as const,
  programs: [
    "safe_hashes",
  ] as const,
  companions: [
    "getfoundry.sh",
    "stedolan.github.io/jq",
    "curl.se",
  ] as const,
  dependencies: [
    "gnu.org/bash>=4",
    "gnu.org/gcc/libstdcxx@14",
  ] as const,
  versions: [
    "0.1.4",
    "0.1.3",
  ] as const,
  fullPath: "github.com/Cyfrin/safe-tx-hashes-util" as const,
  aliases: [
    "safe_hashes",
    "Cyfrin/safe-tx-hashes-util",
  ] as const,
}

export type GithubcomcyfrinsafetxhashesutilPackage = typeof githubcomcyfrinsafetxhashesutilPackage
