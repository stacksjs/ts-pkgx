export const matiosourceforgeioPackage = {
  name: "libmatio" as const,
  domain: "matio.sourceforge.io" as const,
  description: "C library for reading and writing MATLAB MAT files" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/matio.sourceforge.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) matdump" as const,
  programs: [
    "matdump",
  ] as const,
  companions: [] as const,
  dependencies: [
    "hdfgroup.org/HDF5",
    "zlib.net",
  ] as const,
  versions: [
    "1.5.28",
    "1.5.27",
    "1.5.26",
    "1.5.25",
    "1.5.24",
    "1.5.23",
  ] as const,
  fullPath: "matio.sourceforge.io" as const,
  aliases: [
    "libmatio",
  ] as const,
}

export type MatiosourceforgeioPackage = typeof matiosourceforgeioPackage
