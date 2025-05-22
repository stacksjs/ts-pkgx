export const libssh2orgPackage = {
  name: "libssh2.org" as const,
  domain: "libssh2.org" as const,
  description: "the SSH library" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/libssh2.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +libssh2.org -- $SHELL -i" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    "openssl.org^1.1",
    "zlib.net^1.2",
  ] as const,
  versions: [
    "1.11.1",
    "1.11.0",
    "1.10.0",
  ] as const,
  fullPath: "libssh2.org" as const,
}

export type Libssh2orgPackage = typeof libssh2orgPackage
