/**
 * Generated from pkgx.dev data
 */
export const asciinemaorgPackage = {
  programs: [
    "asciinema",
  ] as const,
  companions: [] as const,
  dependencies: [
    "python.org^3.12",
  ] as const,
  versions: [
    "2.4.0",
  ] as const,
  name: "asciinema.org" as const,
  domain: "asciinema.org" as const,
  description: "Package information for asciinema.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/asciinema.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +asciinema.org -- $SHELL -i" as const,
}

export type AsciinemaorgPackage = typeof asciinemaorgPackage
