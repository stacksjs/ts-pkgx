export const aria2githubioPackage = {
  name: "aria2c" as const,
  domain: "aria2.github.io" as const,
  description: "aria2 is a lightweight multi-protocol & multi-source, cross platform download utility operated in command-line. It supports HTTP/HTTPS, FTP, SFTP, BitTorrent and Metalink." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/aria2.github.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) aria2c" as const,
  programs: [
    "aria2c",
  ] as const,
  companions: [] as const,
  dependencies: [
    "zlib.net^1",
    "openssl.org^1",
    "libexpat.github.io",
    "sqlite.org^3",
  ] as const,
  versions: [
    "1.37.0",
    "1.36.0",
  ] as const,
  fullPath: "aria2.github.io" as const,
  aliases: [
    "aria2c",
  ] as const,
}

export type Aria2githubioPackage = typeof aria2githubioPackage
