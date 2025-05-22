export const cratesiosamplyPackage = {
  name: "samply" as const,
  domain: "crates.io/samply" as const,
  description: "Command-line sampling profiler for macOS, Linux, and Windows" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/samply/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) samply" as const,
  programs: [
    "samply",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.13.1",
    "0.13.0",
    "0.12.0",
  ] as const,
  fullPath: "crates.io/samply" as const,
  aliases: [
    "samply",
  ] as const,
}

export type CratesiosamplyPackage = typeof cratesiosamplyPackage
