/**
 * Generated from pkgx.dev data
 */
export const rustscriptorgPackage = {
  programs: [
    "rust-script",
  ] as const,
  companions: [
    "rust-lang.org",
    "rust-lang.org/cargo",
  ] as const,
  dependencies: [] as const,
  versions: [
    "0.35.0",
    "0.34.0",
  ] as const,
  name: "rust/script.org" as const,
  domain: "rust/script.org" as const,
  description: "Package information for rust/script.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/rust/script.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +rust/script.org -- $SHELL -i" as const,
}

export type RustscriptorgPackage = typeof rustscriptorgPackage
