export const openldaporgliblmdbPackage = {
  name: "liblmdb" as const,
  domain: "openldap.org/liblmdb" as const,
  description: "Lightning memory-mapped database: key-value data store" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/openldap.org/liblmdb/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +openldap.org/liblmdb -- $SHELL -i" as const,
  programs: [
    "mdb_copy",
    "mdb_dump",
    "mdb_load",
    "mdb_stat",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.9.33",
  ] as const,
  fullPath: "openldap.org/liblmdb" as const,
  aliases: [
    "liblmdb",
  ] as const,
}

export type OpenldaporgliblmdbPackage = typeof openldaporgliblmdbPackage
