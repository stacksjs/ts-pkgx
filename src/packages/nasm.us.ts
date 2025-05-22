/**
 * Generated from pkgx.dev data
 */
export const nasmusPackage = {
  programs: [
    "nasm",
    "ndisasm",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "2.16.3",
    "2.16.2",
    "2.15.5",
  ] as const,
  name: "nasm.us" as const,
  domain: "nasm.us" as const,
  description: "Package information for nasm.us" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/nasm.us/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +nasm.us -- $SHELL -i" as const,
}

export type NasmusPackage = typeof nasmusPackage
