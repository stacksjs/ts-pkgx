export const watchexecgithubioPackage = {
  name: "watchexec" as const,
  domain: "watchexec.github.io" as const,
  description: "Executes commands in response to file modifications" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/watchexec.github.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) watchexec" as const,
  programs: [
    "watchexec",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "2.3.2",
    "2.3.1",
    "2.3.0",
    "2.2.1",
    "2.2.0",
    "2.1.2",
  ] as const,
  fullPath: "watchexec.github.io" as const,
}

export type WatchexecgithubioPackage = typeof watchexecgithubioPackage
