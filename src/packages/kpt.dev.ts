export const kptdevPackage = {
  name: "kpt" as const,
  domain: "kpt.dev" as const,
  description: "Automate Kubernetes Configuration Editing" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/kpt.dev/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) kpt" as const,
  programs: [
    "kpt",
  ] as const,
  companions: [] as const,
  dependencies: [
    "git-scm.org",
  ] as const,
  versions: [
    "0.39.3",
  ] as const,
  fullPath: "kpt.dev" as const,
}

export type KptdevPackage = typeof kptdevPackage
