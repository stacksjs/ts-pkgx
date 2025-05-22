export const vapoursynthcomPackage = {
  name: "vspipe" as const,
  domain: "vapoursynth.com" as const,
  description: "A video processing framework with simplicity in mind" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/vapoursynth.com/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) vspipe" as const,
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
  fullPath: "vapoursynth.com" as const,
  aliases: [
    "vspipe",
  ] as const,
}

export type VapoursynthcomPackage = typeof vapoursynthcomPackage
