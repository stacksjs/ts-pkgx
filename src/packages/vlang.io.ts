export const vlangioPackage = {
  name: "v" as const,
  domain: "vlang.io" as const,
  description: "Simple, fast, safe, compiled language for developing maintainable software. Compiles itself in <1s with zero library dependencies. Supports automatic C => V translation. https://vlang.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/vlang.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) v" as const,
  programs: [
    "v",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.4.10",
    "0.4.9",
    "0.4.8",
    "0.4.7",
    "0.4.6",
    "0.4.5",
    "0.4.4",
    "0.4.3",
    "0.4.2",
    "0.4.1",
    "0.4.0",
    "0.3.5",
    "0.3.4",
    "0.3.3",
  ] as const,
  fullPath: "vlang.io" as const,
}

export type VlangioPackage = typeof vlangioPackage
