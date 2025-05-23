export const kubernetesioPackage = {
  name: 'kubernetes.io' as const,
  domain: 'kubernetes.io' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx kubernetes.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'kubernetes.io' as const,
}

export type KubernetesioPackage = typeof kubernetesioPackage
