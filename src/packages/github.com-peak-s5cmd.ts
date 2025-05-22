export const githubcompeaks5cmdPackage = {
  name: "s5cmd" as const,
  domain: "github.com/peak/s5cmd" as const,
  description: "Parallel S3 and local filesystem execution tool." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/github.com/peak/s5cmd/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) s5cmd" as const,
  programs: [
    "s5cmd",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "2.3.0",
  ] as const,
  fullPath: "github.com/peak/s5cmd" as const,
  aliases: [
    "s5cmd",
    "peak/s5cmd",
  ] as const,
}

export type Githubcompeaks5cmdPackage = typeof githubcompeaks5cmdPackage
