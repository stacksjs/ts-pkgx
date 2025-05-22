export const poktnetworkPackage = {
  name: "pocket" as const,
  domain: "pokt.network" as const,
  description: "Official implementation of the Pocket Network Protocol" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/pokt.network/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) pocket" as const,
  programs: [
    "pocket",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.12.0",
    "0.11.3",
    "0.11.2",
    "0.11.1",
    "0.10.4",
    "0.10.3",
    "0.10.0",
    "0.9.2",
  ] as const,
  fullPath: "pokt.network" as const,
  aliases: [
    "pocket",
  ] as const,
}

export type PoktnetworkPackage = typeof poktnetworkPackage
