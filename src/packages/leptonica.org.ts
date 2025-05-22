/**
 * Generated from pkgx.dev data
 */
export const leptonicaorgPackage = {
  programs: [
    "convertfilestopdf",
    "convertfilestops",
    "convertformat",
    "convertsegfilestopdf",
    "convertsegfilestops",
    "converttopdf",
    "converttops",
    "fileinfo",
    "imagetops",
    "xtractprotos",
  ] as const,
  companions: [] as const,
  dependencies: [
    "giflib.sourceforge.io@5",
    "libjpeg-turbo.org@2",
    "libpng.org@1",
    "simplesystems.org/libtiff@4",
    "openjpeg.org",
    "google.com/webp",
  ] as const,
  versions: [
    "1.85.0",
    "1.84.1",
    "1.84.0",
    "1.83.1",
  ] as const,
  name: "leptonica.org" as const,
  domain: "leptonica.org" as const,
  description: "Package information for leptonica.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/leptonica.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +leptonica.org -- $SHELL -i" as const,
}

export type LeptonicaorgPackage = typeof leptonicaorgPackage
