export const uriparsergithubioPackage = {
  name: "uriparse" as const,
  domain: "uriparser.github.io" as const,
  description: ":hocho: Strictly RFC 3986 compliant URI parsing and handling library written in C89; moved from SourceForge to GitHub" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/uriparser.github.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) uriparse" as const,
  programs: [
    "uriparse",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.9.8",
    "0.9.7",
  ] as const,
  fullPath: "uriparser.github.io" as const,
}

export type UriparsergithubioPackage = typeof uriparsergithubioPackage
