export const eigentuxfamilyorgPackage = {
  name: "eigen.tuxfamily.org" as const,
  domain: "eigen.tuxfamily.org" as const,
  description: "" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/eigen.tuxfamily.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +eigen.tuxfamily.org -- $SHELL -i" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    "linuxgnu.org/gcc/libstdcxx@14",
    "gnu.org/gcc/libstdcxx@14",
  ] as const,
  versions: [
    "3.4.0",
  ] as const,
  fullPath: "eigen.tuxfamily.org" as const,
}

export type EigentuxfamilyorgPackage = typeof eigentuxfamilyorgPackage
