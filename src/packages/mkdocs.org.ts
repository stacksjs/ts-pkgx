/**
 * Generated from pkgx.dev data
 */
export const mkdocsorgPackage = {
  programs: [
    "mkdocs",
  ] as const,
  companions: [] as const,
  dependencies: [
    "python.org>=3<3.12",
  ] as const,
  versions: [
    "1.6.1",
    "1.6.0",
    "1.5.3",
  ] as const,
  name: "mkdocs.org" as const,
  domain: "mkdocs.org" as const,
  description: "Package information for mkdocs.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/mkdocs.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +mkdocs.org -- $SHELL -i" as const,
}

export type MkdocsorgPackage = typeof mkdocsorgPackage
