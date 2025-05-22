export const mkdocsorgPackage = {
  name: "mkdocs" as const,
  domain: "mkdocs.org" as const,
  description: "Project documentation with Markdown." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/mkdocs.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) mkdocs" as const,
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
  fullPath: "mkdocs.org" as const,
}

export type MkdocsorgPackage = typeof mkdocsorgPackage
