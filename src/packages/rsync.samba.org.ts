/**
 * Generated from pkgx.dev data
 */
export const rsyncsambaorgPackage = {
  programs: [
    "rsync",
    "rsync-ssl",
  ] as const,
  companions: [] as const,
  dependencies: [
    "zlib.net^1",
    "facebook.com/zstd^1",
    "lz4.org^1",
  ] as const,
  versions: [
    "3.4.1",
    "3.4.0",
    "3.3.0",
    "3.2.7",
  ] as const,
  name: "rsync.samba.org" as const,
  domain: "rsync.samba.org" as const,
  description: "Package information for rsync.samba.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/rsync.samba.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +rsync.samba.org -- $SHELL -i" as const,
}

export type RsyncsambaorgPackage = typeof rsyncsambaorgPackage
