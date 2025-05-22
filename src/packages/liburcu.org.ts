export const liburcuorgPackage = {
  name: "liburcu" as const,
  domain: "liburcu.org" as const,
  description: "liburcu is a LGPLv2.1 userspace RCU (read-copy-update) library. This data synchronization library provides read-side access which scales linearly with the number of cores." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/liburcu.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +liburcu.org -- $SHELL -i" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.15.3",
    "0.15.2",
    "0.15.1",
    "0.15.0",
  ] as const,
  fullPath: "liburcu.org" as const,
}

export type LiburcuorgPackage = typeof liburcuorgPackage
