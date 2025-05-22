export const argbashdevPackage = {
  name: "argbash" as const,
  domain: "argbash.dev" as const,
  description: "Bash argument parsing code generator" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/argbash.dev/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +argbash.dev -- $SHELL -i" as const,
  programs: [
    "argbash",
    "argbash-init",
    "argbash-1to2",
  ] as const,
  companions: [] as const,
  dependencies: [
    "gnu.org/bash>=3",
    "gnu.org/autoconf",
  ] as const,
  versions: [
    "2.10.0",
  ] as const,
  fullPath: "argbash.dev" as const,
}

export type ArgbashdevPackage = typeof argbashdevPackage
