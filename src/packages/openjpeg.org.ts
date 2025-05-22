/**
 * Generated from pkgx.dev data
 */
export const openjpegorgPackage = {
  programs: [
    "opj_compress",
    "opj_decompress",
    "opj_dump",
  ] as const,
  companions: [] as const,
  dependencies: [
    "libpng.org^1",
    "simplesystems.org/libtiff^4",
  ] as const,
  versions: [
    "2.5.3",
    "2.5.2",
    "2.5.1",
    "2.5.0",
  ] as const,
  aliases: [
    "opj",
  ] as const,
  name: "openjpeg.org" as const,
  domain: "openjpeg.org" as const,
  description: "Package information for openjpeg.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/openjpeg.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +openjpeg.org -- $SHELL -i" as const,
}

export type OpenjpegorgPackage = typeof openjpegorgPackage
