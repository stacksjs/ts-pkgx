export const classicyarnpkgcomPackage = {
  name: "classic.yarnpkg.com" as const,
  domain: "classic.yarnpkg.com" as const,
  description: "The 1.x line is frozen - features and bugfixes now happen on https://github.com/yarnpkg/berry" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/classic.yarnpkg.com/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +classic.yarnpkg.com -- $SHELL -i" as const,
  programs: [
    "yarn",
    "yarnpkg",
  ] as const,
  companions: [] as const,
  dependencies: [
    "nodejs.org>=5",
  ] as const,
  versions: [
    "1.22.22",
    "1.22.21",
    "1.22.20",
    "1.22.19",
  ] as const,
  fullPath: "classic.yarnpkg.com" as const,
}

export type ClassicyarnpkgcomPackage = typeof classicyarnpkgcomPackage
