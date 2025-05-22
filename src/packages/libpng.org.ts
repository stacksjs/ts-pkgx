/**
 * Generated from pkgx.dev data
 */
export const libpngorgPackage = {
  programs: [
    "libpng-config",
    "libpng16-config",
    "png-fix-itxt",
    "pngfix",
  ] as const,
  companions: [] as const,
  dependencies: [
    "zlib.net@1",
  ] as const,
  versions: [
    "1.6.48",
    "1.6.47",
    "1.6.46",
    "1.6.45",
    "1.6.44",
    "1.6.43",
    "1.6.42",
    "1.6.41",
    "1.6.40",
    "1.6.39",
    "1.6.35",
  ] as const,
  name: "libpng.org" as const,
  domain: "libpng.org" as const,
  description: "Package information for libpng.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/libpng.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +libpng.org -- $SHELL -i" as const,
}

export type LibpngorgPackage = typeof libpngorgPackage
