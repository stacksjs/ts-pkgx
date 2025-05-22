export const githubcomblynnnexPackage = {
  name: "nex" as const,
  domain: "github.com/blynn/nex" as const,
  description: "44BSD re-implementation of vi" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/github.com/blynn/nex/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) nex" as const,
  programs: [
    "nex",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "2021.3.30",
  ] as const,
  fullPath: "github.com/blynn/nex" as const,
  aliases: [
    "nex",
    "blynn/nex",
  ] as const,
}

export type GithubcomblynnnexPackage = typeof githubcomblynnnexPackage
