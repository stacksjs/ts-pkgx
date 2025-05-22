/**
 * Generated from pkgx.dev data
 */
export const cratesioqsvPackage = {
  programs: [
    "qsv",
  ] as const,
  companions: [] as const,
  dependencies: [
    "linuxwayland.freedesktop.org",
    "wayland.freedesktop.org",
  ] as const,
  versions: [
    "5.0.3",
    "4.0.0",
    "3.3.0",
    "3.2.0",
  ] as const,
  aliases: [
    "qsv",
  ] as const,
  name: "crates.io/qsv" as const,
  domain: "crates.io/qsv" as const,
  description: "Package information for crates.io/qsv" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/qsv/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +crates.io/qsv -- $SHELL -i" as const,
}

export type CratesioqsvPackage = typeof cratesioqsvPackage
