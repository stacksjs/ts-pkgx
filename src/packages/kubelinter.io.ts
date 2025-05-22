/**
 * Generated from pkgx.dev data
 */
export const kubelinterioPackage = {
  programs: [
    "kube-linter",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.7.2",
    "0.7.1",
    "0.7.0",
    "0.6.8",
  ] as const,
  aliases: [
    "kube-linter",
  ] as const,
  name: "kubelinter.io" as const,
  domain: "kubelinter.io" as const,
  description: "Package information for kubelinter.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/kubelinter.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +kubelinter.io -- $SHELL -i" as const,
}

export type KubelinterioPackage = typeof kubelinterioPackage
