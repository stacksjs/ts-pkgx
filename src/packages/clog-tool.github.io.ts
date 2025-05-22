export const clogtoolgithubioPackage = {
  name: "clog" as const,
  domain: "clog-tool.github.io" as const,
  description: "Colorized pattern-matching log tail utility" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/clog-tool.github.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) clog" as const,
  programs: [
    "clog",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.9.3",
  ] as const,
  fullPath: "clog-tool.github.io" as const,
}

export type ClogtoolgithubioPackage = typeof clogtoolgithubioPackage
