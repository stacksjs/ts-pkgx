/**
 * Generated from pkgx.dev data
 */
export const krewsigsk8sioPackage = {
  programs: [
    "kubectl-krew",
  ] as const,
  companions: [] as const,
  dependencies: [
    "git-scm.org",
  ] as const,
  versions: [
    "0.4.5",
    "0.4.4",
  ] as const,
  aliases: [
    "kubectl-krew",
  ] as const,
  name: "krew.sigs.k8s.io" as const,
  domain: "krew.sigs.k8s.io" as const,
  description: "Package information for krew.sigs.k8s.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/krew.sigs.k8s.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +krew.sigs.k8s.io -- $SHELL -i" as const,
}

export type Krewsigsk8sioPackage = typeof krewsigsk8sioPackage
