/**
 * Generated from pkgx.dev data
 */
export const microcksioPackage = {
  programs: [
    "microcks-cli",
  ] as const,
  companions: [] as const,
  dependencies: [
    "curl.se/ca-certs",
  ] as const,
  versions: [
    "0.9.0",
    "0.5.8",
    "0.5.7",
    "0.5.6",
    "0.5.5",
    "0.5.4",
  ] as const,
  aliases: [
    "microcks-cli",
  ] as const,
  name: "microcks.io" as const,
  domain: "microcks.io" as const,
  description: "Package information for microcks.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/microcks.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +microcks.io -- $SHELL -i" as const,
}

export type MicrocksioPackage = typeof microcksioPackage
