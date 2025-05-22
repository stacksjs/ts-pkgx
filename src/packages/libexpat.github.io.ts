export const libexpatgithubioPackage = {
  name: "xmlwf" as const,
  domain: "libexpat.github.io" as const,
  description: ":herb: Fast streaming XML parser written in C99 with >90% test coverage; moved from SourceForge to GitHub" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/libexpat.github.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) xmlwf" as const,
  programs: [
    "xmlwf",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "2.7.1",
    "2.7.0",
    "2.6.4",
    "2.6.3",
    "2.6.2",
    "2.6.1",
    "2.6.0",
    "2.5.0",
    "2.4.9",
  ] as const,
  fullPath: "libexpat.github.io" as const,
  aliases: [
    "xmlwf",
  ] as const,
}

export type LibexpatgithubioPackage = typeof libexpatgithubioPackage
