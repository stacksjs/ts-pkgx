export const soxrsourceforgenetPackage = {
  name: "soxr.sourceforge.net" as const,
  domain: "soxr.sourceforge.net" as const,
  description: "" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/soxr.sourceforge.net/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +soxr.sourceforge.net -- $SHELL -i" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.1.3",
  ] as const,
  fullPath: "soxr.sourceforge.net" as const,
}

export type SoxrsourceforgenetPackage = typeof soxrsourceforgenetPackage
