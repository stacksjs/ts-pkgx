export const docbookorgPackage = {
  name: "docbook.org" as const,
  domain: "docbook.org" as const,
  description: "" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/docbook.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +docbook.org -- $SHELL -i" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "5.1.0",
  ] as const,
  fullPath: "docbook.org" as const,
}

export type DocbookorgPackage = typeof docbookorgPackage
