export const aux4ioPackage = {
  name: "aux4" as const,
  domain: "aux4.io" as const,
  description: "elevate your imagination" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/aux4.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) aux4" as const,
  programs: [
    "aux4",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "5.0.14",
    "5.0.11",
    "5.0.10",
    "5.0.9",
    "5.0.8",
    "5.0.3",
  ] as const,
  fullPath: "aux4.io" as const,
}

export type Aux4ioPackage = typeof aux4ioPackage
