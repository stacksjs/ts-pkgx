export const krewsigsk8sioPackage = {
  name: "kubectl-krew" as const,
  domain: "krew.sigs.k8s.io" as const,
  description: "📦 Find and install kubectl plugins" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/krew.sigs.k8s.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) kubectl-krew" as const,
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
  fullPath: "krew.sigs.k8s.io" as const,
  aliases: [
    "kubectl-krew",
  ] as const,
}

export type Krewsigsk8sioPackage = typeof krewsigsk8sioPackage
