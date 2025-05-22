export const libziporgPackage = {
  name: "zip" as const,
  domain: "libzip.org" as const,
  description: "A C library for reading, creating, and modifying zip archives." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/libzip.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +libzip.org -- $SHELL -i" as const,
  programs: [
    "zipcmp",
    "zipmerge",
    "ziptool",
  ] as const,
  companions: [] as const,
  dependencies: [
    "facebook.com/zstd>=1.5.0",
    "darwinsourceware.org/bzip2>=1.0.8tukaani.org/xz>=5.2.7zlib.net>=1.2.13",
    "sourceware.org/bzip2>=1.0.8",
    "tukaani.org/xz>=5.2.7",
    "zlib.net>=1.2.13",
    "linuxopenssl.org^1.1",
    "openssl.org^1.1",
  ] as const,
  versions: [
    "1.11.3",
    "1.11.2",
    "1.11.1",
    "1.10.1",
    "1.10.0",
    "1.9.2",
  ] as const,
  fullPath: "libzip.org" as const,
  aliases: [
    "zip",
  ] as const,
}

export type LibziporgPackage = typeof libziporgPackage
