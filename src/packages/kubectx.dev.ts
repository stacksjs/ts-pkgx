/**
 * Generated from pkgx.dev data
 */
export const kubectxdevPackage = {
  programs: [
    "kubectx",
    "kubens",
  ] as const,
  companions: [] as const,
  dependencies: [
    "github.com/junegunn/fzf",
  ] as const,
  versions: [
    "0.9.5",
    "0.9.4",
  ] as const,
  name: "kubectx.dev" as const,
  domain: "kubectx.dev" as const,
  description: "Package information for kubectx.dev" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/kubectx.dev/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +kubectx.dev -- $SHELL -i" as const,
}

export type KubectxdevPackage = typeof kubectxdevPackage
