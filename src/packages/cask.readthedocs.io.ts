export const caskreadthedocsioPackage = {
  name: "cask" as const,
  domain: "cask.readthedocs.io" as const,
  description: "Project management tool for Emacs" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/cask.readthedocs.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) cask" as const,
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
  fullPath: "cask.readthedocs.io" as const,
}

export type CaskreadthedocsioPackage = typeof caskreadthedocsioPackage
