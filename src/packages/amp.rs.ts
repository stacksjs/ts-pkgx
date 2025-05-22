/**
 * Generated from pkgx.dev data
 */
export const amprsPackage = {
  programs: [
    "amp",
  ] as const,
  companions: [] as const,
  dependencies: [
    "zlib.net@1",
    "libgit2.org@1",
    "linuxopenssl.org@1.1",
    "openssl.org@1.1",
  ] as const,
  versions: [
    "0.7.1",
  ] as const,
  name: "amp.rs" as const,
  domain: "amp.rs" as const,
  description: "Package information for amp.rs" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/amp.rs/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +amp.rs -- $SHELL -i" as const,
}

export type AmprsPackage = typeof amprsPackage
