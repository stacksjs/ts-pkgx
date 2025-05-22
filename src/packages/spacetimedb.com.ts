/**
 * Generated from pkgx.dev data
 */
export const spacetimedbcomPackage = {
  programs: [
    "spacetime",
  ] as const,
  companions: [] as const,
  dependencies: [
    "openssl.org^1",
  ] as const,
  versions: [
    "2023.12.8",
    "2023.8.12",
  ] as const,
  name: "spacetimedb.com" as const,
  domain: "spacetimedb.com" as const,
  description: "Package information for spacetimedb.com" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/spacetimedb.com/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +spacetimedb.com -- $SHELL -i" as const,
}

export type SpacetimedbcomPackage = typeof spacetimedbcomPackage
