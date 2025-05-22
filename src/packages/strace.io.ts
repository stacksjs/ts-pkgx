/**
 * Generated from pkgx.dev data
 */
export const straceioPackage = {
  programs: [
    "strace",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "6.2.0",
  ] as const,
  name: "strace.io" as const,
  domain: "strace.io" as const,
  description: "Package information for strace.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/strace.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +strace.io -- $SHELL -i" as const,
}

export type StraceioPackage = typeof straceioPackage
