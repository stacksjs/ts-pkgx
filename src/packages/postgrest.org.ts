/**
 * Generated from pkgx.dev data
 */
export const postgrestorgPackage = {
  programs: [
    "postgrest",
  ] as const,
  companions: [] as const,
  dependencies: [
    "postgresql.org/libpq@17",
    "zlib.net~1.3",
    "gnu.org/gcc/libstdcxx@14",
  ] as const,
  versions: [
    "13.0.0",
    "12.2.12",
    "12.2.11",
    "12.2.10",
    "12.2.9",
    "12.2.8",
    "12.2.7",
    "12.2.6",
    "12.2.5",
    "12.2.4",
    "12.2.3",
  ] as const,
  name: "postgrest.org" as const,
  domain: "postgrest.org" as const,
  description: "Package information for postgrest.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/postgrest.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +postgrest.org -- $SHELL -i" as const,
}

export type PostgrestorgPackage = typeof postgrestorgPackage
