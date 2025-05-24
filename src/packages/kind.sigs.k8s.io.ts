export const kindsigsk8sioPackage = {
  name: 'kind' as const,
  domain: 'kind.sigs.k8s.io' as const,
  description: 'Kubernetes IN Docker - local clusters for testing Kubernetes' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kind.sigs.k8s.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) kind' as const,
  programs: [
    'kind',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.29.0',
    '0.28.0',
    '0.27.0',
    '0.26.0',
    '0.25.0',
    '0.24.0',
    '0.23.0',
    '0.22.0',
    '0.21.0',
    '0.20.0',
    '0.19.0',
  ] as const,
  fullPath: 'kind.sigs.k8s.io' as const,
  aliases: [] as const,
}

export type Kindsigsk8sioPackage = typeof kindsigsk8sioPackage
