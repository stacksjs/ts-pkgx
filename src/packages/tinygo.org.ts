export const tinygoorgPackage = {
  name: "tinygo" as const,
  domain: "tinygo.org" as const,
  description: "Go compiler for small places. Microcontrollers, WebAssembly (WASM/WASI), and command-line tools. Based on LLVM." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/tinygo.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) tinygo" as const,
  programs: [
    "tinygo",
  ] as const,
  companions: [
    "llvm.org",
  ] as const,
  dependencies: [
    "go.dev",
  ] as const,
  versions: [
    "0.37.0",
    "0.36.0",
    "0.35.0",
    "0.34.0",
    "0.33.0",
    "0.32.0",
    "0.31.2",
  ] as const,
  fullPath: "tinygo.org" as const,
}

export type TinygoorgPackage = typeof tinygoorgPackage
