export const githubcomwitheredmagicstarplsPackage = {
  name: "starpls" as const,
  domain: "github.com/withered-magic/starpls" as const,
  description: "An LSP implementation for Starlark, the configuration language used by Bazel and Buck2." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/github.com/withered-magic/starpls/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) starpls" as const,
  programs: [
    "starpls",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.1.21",
  ] as const,
  fullPath: "github.com/withered-magic/starpls" as const,
  aliases: [
    "starpls",
    "withered-magic/starpls",
  ] as const,
}

export type GithubcomwitheredmagicstarplsPackage = typeof githubcomwitheredmagicstarplsPackage
