export const libsodiumorgPackage = {
  name: "libsodium.org" as const,
  domain: "libsodium.org" as const,
  description: "" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/libsodium.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +libsodium.org -- $SHELL -i" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "1.0.20",
    "1.0.19",
    "1.0.18",
    "1.0.17",
  ] as const,
  fullPath: "libsodium.org" as const,
}

export type LibsodiumorgPackage = typeof libsodiumorgPackage
