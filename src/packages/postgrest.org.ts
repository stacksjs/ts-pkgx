export const postgrestorgPackage = {
  name: "postgrest" as const,
  domain: "postgrest.org" as const,
  description: "Serves a fully RESTful API from any existing PostgreSQL database" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/postgrest.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) postgrest" as const,
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
  fullPath: "postgrest.org" as const,
}

export type PostgrestorgPackage = typeof postgrestorgPackage
