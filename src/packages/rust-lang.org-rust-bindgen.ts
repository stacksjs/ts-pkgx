export const rustlangorgrustbindgenPackage = {
  name: "bindgen" as const,
  domain: "rust-lang.org/rust-bindgen" as const,
  description: "Automatically generates Rust FFI bindings to C (and some C++) libraries." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/rust-lang.org/rust-bindgen/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) bindgen" as const,
  programs: [
    "bindgen",
  ] as const,
  companions: [
    "rust-lang.org",
  ] as const,
  dependencies: [] as const,
  versions: [
    "0.71.1",
    "0.71.0",
    "0.70.1",
  ] as const,
  fullPath: "rust-lang.org/rust-bindgen" as const,
  aliases: [
    "bindgen",
    "rust-bindgen",
  ] as const,
}

export type RustlangorgrustbindgenPackage = typeof rustlangorgrustbindgenPackage
