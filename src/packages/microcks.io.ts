export const microcksioPackage = {
  name: "microcks-cli" as const,
  domain: "microcks.io" as const,
  description: "Simple CLI for interacting with Microcks test APIs" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/microcks.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) microcks-cli" as const,
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
  fullPath: "microcks.io" as const,
  aliases: [
    "microcks-cli",
  ] as const,
}

export type MicrocksioPackage = typeof microcksioPackage
