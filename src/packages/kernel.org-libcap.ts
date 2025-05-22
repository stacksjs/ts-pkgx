export const kernelorglibcapPackage = {
  name: "libcap" as const,
  domain: "kernel.org/libcap" as const,
  description: "" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/kernel.org/libcap/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +kernel.org/libcap -- $SHELL -i" as const,
  programs: [
    "capsh",
    "getcap",
    "getpcaps",
    "setcap",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "1.2.76",
    "1.2.75",
    "1.2.74",
    "1.2.73",
  ] as const,
  fullPath: "kernel.org/libcap" as const,
  aliases: [
    "libcap",
  ] as const,
}

export type KernelorglibcapPackage = typeof kernelorglibcapPackage
