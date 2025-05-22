export const cratesiocargotarpaulinPackage = {
  name: "cargo-tarpaulin" as const,
  domain: "crates.io/cargo-tarpaulin" as const,
  description: "A code coverage tool for Rust projects" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/cargo-tarpaulin/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) cargo-tarpaulin" as const,
  programs: [
    "cargo-tarpaulin",
  ] as const,
  companions: [
    "rust-lang.org/cargo",
  ] as const,
  dependencies: [] as const,
  versions: [
    "0.32.7",
    "0.32.6",
    "0.32.5",
    "0.32.4",
    "0.32.3",
    "0.32.2",
    "0.32.1",
    "0.32.0",
    "0.31.5",
    "0.31.4",
  ] as const,
  fullPath: "crates.io/cargo-tarpaulin" as const,
  aliases: [
    "cargo-tarpaulin",
  ] as const,
}

export type CratesiocargotarpaulinPackage = typeof cratesiocargotarpaulinPackage
