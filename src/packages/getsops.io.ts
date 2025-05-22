export const getsopsioPackage = {
  name: "sops" as const,
  domain: "getsops.io" as const,
  description: "Simple and flexible tool for managing secrets" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/getsops.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) sops" as const,
  programs: [
    "sops",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "3.10.2",
    "3.10.1",
    "3.10.0",
    "3.9.4",
    "3.9.3",
    "3.9.2",
    "3.9.1",
    "3.9.0",
    "3.8.1",
  ] as const,
  fullPath: "getsops.io" as const,
  aliases: [
    "sops",
  ] as const,
}

export type GetsopsioPackage = typeof getsopsioPackage
