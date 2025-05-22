/**
 * Generated from pkgx.dev data
 */
export const kubebuilderioPackage = {
  programs: [
    "kubebuilder",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "4.5.2",
    "4.5.1",
    "4.5.0",
    "4.4.0",
    "4.3.1",
    "4.3.0",
    "4.2.0",
    "4.1.1",
    "4.1.0",
    "4.0.0",
    "3.15.1",
    "3.15.0",
    "3.14.2",
    "3.14.1",
    "3.14.0",
    "3.13.0",
    "3.12.0",
  ] as const,
  name: "kubebuilder.io" as const,
  domain: "kubebuilder.io" as const,
  description: "Package information for kubebuilder.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/kubebuilder.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +kubebuilder.io -- $SHELL -i" as const,
}

export type KubebuilderioPackage = typeof kubebuilderioPackage
