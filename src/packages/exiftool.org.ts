export const exiftoolorgPackage = {
  name: "exiftool" as const,
  domain: "exiftool.org" as const,
  description: "Perl lib for reading and writing EXIF metadata" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/exiftool.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) exiftool" as const,
  programs: [
    "exiftool",
  ] as const,
  companions: [] as const,
  dependencies: [
    "perl.org",
  ] as const,
  versions: [
    "13.25.0",
    "13.10.0",
    "13.0.0",
    "12.76.0",
    "12.75.0",
    "12.70.0",
    "12.60.0",
  ] as const,
  fullPath: "exiftool.org" as const,
}

export type ExiftoolorgPackage = typeof exiftoolorgPackage
