/**
 * Generated from pkgx.dev data
 */
export const veleroioPackage = {
  programs: [
    "velero",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "1.16.1",
  ] as const,
  name: "velero.io" as const,
  domain: "velero.io" as const,
  description: "Package information for velero.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/velero.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +velero.io -- $SHELL -i" as const,
}

export type VeleroioPackage = typeof veleroioPackage
