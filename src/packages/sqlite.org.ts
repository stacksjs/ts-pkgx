/**
 * Generated from pkgx.dev data
 */
export const sqliteorgPackage = {
  programs: [
    "sqlite3",
  ] as const,
  companions: [] as const,
  dependencies: [
    "zlib.net@1",
    "gnu.org/readline@8",
  ] as const,
  versions: [
    "3.49.2",
    "3.49.1",
    "3.49.0",
    "3.48.0",
    "3.47.2",
    "3.47.1",
    "3.47.0",
    "3.46.1",
    "3.46.0",
    "3.45.3",
    "3.45.2",
    "3.45.1",
    "3.45.0",
    "3.44.4",
    "3.44.3",
    "3.44.2",
    "3.44.1",
    "3.44.0",
    "3.43.2",
    "3.43.1",
    "3.43.0",
    "3.42.0",
    "3.40.0",
    "3.39.4",
  ] as const,
  aliases: [
    "sqlite3",
  ] as const,
  name: "sqlite.org" as const,
  domain: "sqlite.org" as const,
  description: "Package information for sqlite.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/sqlite.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +sqlite.org -- $SHELL -i" as const,
}

export type SqliteorgPackage = typeof sqliteorgPackage
