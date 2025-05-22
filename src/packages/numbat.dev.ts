export const numbatdevPackage = {
  name: "numbat" as const,
  domain: "numbat.dev" as const,
  description: "A statically typed programming language for scientific computations with first class support for physical dimensions and units" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/numbat.dev/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) numbat" as const,
  programs: [
    "numbat",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "1.16.0",
    "1.15.0",
    "1.14.0",
    "1.13.0",
    "1.12.0",
    "1.11.0",
    "1.10.1",
    "1.10.0",
    "1.9.0",
    "1.8.0",
  ] as const,
  fullPath: "numbat.dev" as const,
}

export type NumbatdevPackage = typeof numbatdevPackage
