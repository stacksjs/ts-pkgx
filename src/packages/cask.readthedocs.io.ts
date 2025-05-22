/**
 * Generated from pkgx.dev data
 */
export const caskreadthedocsioPackage = {
  programs: [
    "cask",
  ] as const,
  companions: [] as const,
  dependencies: [
    "gnu.org/coreutils",
    "gnu.org/emacs",
  ] as const,
  versions: [
    "0.9.0",
  ] as const,
  name: "cask.readthedocs.io" as const,
  domain: "cask.readthedocs.io" as const,
  description: "Package information for cask.readthedocs.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/cask.readthedocs.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +cask.readthedocs.io -- $SHELL -i" as const,
}

export type CaskreadthedocsioPackage = typeof caskreadthedocsioPackage
