/**
 * Generated from pkgx.dev data
 */
export const amberlangcomPackage = {
  programs: [
    "amber",
  ] as const,
  companions: [
    "gnu.org/bc",
    "gnu.org/sed",
    "gnu.org/coreutils",
    "gnu.org/gawk",
    "gnu.org/bash",
  ] as const,
  dependencies: [] as const,
  versions: [
    "0.4.0",
    "0.3.5",
    "0.3.4",
    "0.3.3",
    "0.3.2",
    "0.3.1",
  ] as const,
  name: "amber/lang.com" as const,
  domain: "amber/lang.com" as const,
  description: "Package information for amber/lang.com" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/amber/lang.com/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +amber/lang.com -- $SHELL -i" as const,
}

export type AmberlangcomPackage = typeof amberlangcomPackage
