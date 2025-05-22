export const rustscriptorgPackage = {
  name: "rust-script" as const,
  domain: "rust-script.org" as const,
  description: "Run Rust files and expressions as scripts without any setup or compilation step." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/rust-script.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) rust-script" as const,
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
  fullPath: "rust-script.org" as const,
}

export type RustscriptorgPackage = typeof rustscriptorgPackage
