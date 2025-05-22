/**
 * Generated from pkgx.dev data
 */
export const exiftoolorgPackage = {
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
  name: "exiftool.org" as const,
  domain: "exiftool.org" as const,
  description: "Package information for exiftool.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/exiftool.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +exiftool.org -- $SHELL -i" as const,
}

export type ExiftoolorgPackage = typeof exiftoolorgPackage
