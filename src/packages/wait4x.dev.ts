/**
 * Generated from pkgx.dev data
 */
export const wait4xdevPackage = {
  programs: [
    "wait4x",
  ] as const,
  companions: [
    "curl.se/ca-certs",
  ] as const,
  dependencies: [] as const,
  versions: [
    "3.3.1",
    "3.3.0",
    "3.2.0",
    "3.1.0",
    "3.0.0",
    "2.14.3",
    "2.14.2",
  ] as const,
  name: "wait4x.dev" as const,
  domain: "wait4x.dev" as const,
  description: "Package information for wait4x.dev" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/wait4x.dev/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +wait4x.dev -- $SHELL -i" as const,
}

export type Wait4xdevPackage = typeof wait4xdevPackage
