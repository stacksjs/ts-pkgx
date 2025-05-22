export const giflibsourceforgeioPackage = {
  name: "gif" as const,
  domain: "giflib.sourceforge.io" as const,
  description: "Library and utilities for processing GIFs" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/giflib.sourceforge.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +giflib.sourceforge.io -- $SHELL -i" as const,
  programs: [
    "gif2rgb",
    "gifbuild",
    "gifclrmp",
    "giffix",
    "giftext",
    "giftool",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "5.2.2",
    "5.2.1",
  ] as const,
  fullPath: "giflib.sourceforge.io" as const,
}

export type GiflibsourceforgeioPackage = typeof giflibsourceforgeioPackage
