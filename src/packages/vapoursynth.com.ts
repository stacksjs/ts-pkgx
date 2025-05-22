/**
 * Generated from pkgx.dev data
 */
export const vapoursynthcomPackage = {
  programs: [
    "vspipe",
  ] as const,
  companions: [] as const,
  dependencies: [
    "python.org~3.11",
    "github.com/sekrit-twc/zimg",
    "linuxgnu.org/gcc/libstdcxx",
    "gnu.org/gcc/libstdcxx",
  ] as const,
  versions: [
    "71.0.0",
    "70.0.0",
    "69.0.0",
    "68.0.0",
    "67.0.0",
    "66.0.0",
    "65.0.0",
    "64.0.0",
  ] as const,
  aliases: [
    "vspipe",
  ] as const,
  name: "vapoursynth.com" as const,
  domain: "vapoursynth.com" as const,
  description: "Package information for vapoursynth.com" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/vapoursynth.com/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +vapoursynth.com -- $SHELL -i" as const,
}

export type VapoursynthcomPackage = typeof vapoursynthcomPackage
