export const kubecmcloudPackage = {
  name: "kubecm" as const,
  domain: "kubecm.cloud" as const,
  description: "Manage your kubeconfig more easily." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/kubecm.cloud/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) kubecm" as const,
  programs: [
    "kubecm",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.33.0",
    "0.32.3",
    "0.32.2",
    "0.32.1",
    "0.32.0",
    "0.31.0",
    "0.30.0",
    "0.29.1",
    "0.29.0",
    "0.28.0",
  ] as const,
  fullPath: "kubecm.cloud" as const,
}

export type KubecmcloudPackage = typeof kubecmcloudPackage
