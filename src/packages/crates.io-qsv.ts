export const cratesioqsvPackage = {
  name: "qsv" as const,
  domain: "crates.io/qsv" as const,
  description: "Ultra-fast CSV data-wrangling toolkit" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/qsv/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) qsv" as const,
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
  fullPath: "crates.io/qsv" as const,
  aliases: [
    "qsv",
  ] as const,
}

export type CratesioqsvPackage = typeof cratesioqsvPackage
