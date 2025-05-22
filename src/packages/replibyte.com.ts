/**
 * Generated from pkgx.dev data
 */
export const replibytecomPackage = {
  programs: [
    "replibyte",
  ] as const,
  companions: [] as const,
  dependencies: [
    "openssl.org^1.1",
  ] as const,
  versions: [
    "0.10.0",
  ] as const,
  name: "replibyte.com" as const,
  domain: "replibyte.com" as const,
  description: "Package information for replibyte.com" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/replibyte.com/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +replibyte.com -- $SHELL -i" as const,
}

export type ReplibytecomPackage = typeof replibytecomPackage
