/**
 * Generated from pkgx.dev data
 */
export const musepacknetPackage = {
  programs: [
    "mpc2sv8",
    "mpcchap",
    "mpccut",
    "mpcdec",
    "mpcenc",
    "mpcgain",
    "wavcmp",
  ] as const,
  companions: [] as const,
  dependencies: [
    "musepack.net/libreplaygain",
    "musepack.net/libcuefile",
  ] as const,
  versions: [
    "475.0.0",
  ] as const,
  name: "musepack.net" as const,
  domain: "musepack.net" as const,
  description: "Package information for musepack.net" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/musepack.net/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +musepack.net -- $SHELL -i" as const,
}

export type MusepacknetPackage = typeof musepacknetPackage
