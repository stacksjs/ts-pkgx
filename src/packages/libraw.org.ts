/**
 * Generated from pkgx.dev data
 */
export const libraworgPackage = {
  programs: [
    "4channels",
    "dcraw_emu",
    "dcraw_half",
    "half_mt",
    "mem_image",
    "multirender_test",
    "postprocessing_benchmark",
    "raw-identify",
    "rawtextdump",
    "simple_dcraw",
    "unprocessed_raw",
  ] as const,
  companions: [] as const,
  dependencies: [
    "github.com/jasper-software/jasper",
    "libjpeg-turbo.org",
    "littlecms.com",
    "zlib.net",
    "darwinopenmp.llvm.org",
    "openmp.llvm.org",
  ] as const,
  versions: [
    "0.21.4",
    "0.21.3",
    "0.21.2",
    "0.21.1",
  ] as const,
  name: "libraw.org" as const,
  domain: "libraw.org" as const,
  description: "Package information for libraw.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/libraw.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +libraw.org -- $SHELL -i" as const,
}

export type LibraworgPackage = typeof libraworgPackage
