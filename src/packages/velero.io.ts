export const veleroioPackage = {
  name: "velero" as const,
  domain: "velero.io" as const,
  description: "Backup and migrate Kubernetes applications and their persistent volumes" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/velero.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) velero" as const,
  programs: [
    "velero",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "1.16.1",
  ] as const,
  fullPath: "velero.io" as const,
}

export type VeleroioPackage = typeof veleroioPackage
