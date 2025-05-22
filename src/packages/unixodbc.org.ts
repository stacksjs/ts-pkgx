/**
 * Generated from pkgx.dev data
 */
export const unixodbcorgPackage = {
  programs: [
    "dltest",
    "isql",
    "iusql",
    "odbc_config",
    "odbcinst",
    "slencheck",
  ] as const,
  companions: [] as const,
  dependencies: [
    "gnu.org/libtool",
  ] as const,
  versions: [
    "2.3.12",
    "2.3.11",
  ] as const,
  name: "unixodbc.org" as const,
  domain: "unixodbc.org" as const,
  description: "Package information for unixodbc.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/unixodbc.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +unixodbc.org -- $SHELL -i" as const,
}

export type UnixodbcorgPackage = typeof unixodbcorgPackage
