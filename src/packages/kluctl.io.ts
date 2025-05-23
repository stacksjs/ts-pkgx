export const kluctlioPackage = {
  name: 'kluctl' as const,
  domain: 'kluctl.io' as const,
  description: 'The missing glue to put together large Kubernetes deployments, composed of multiple smaller parts (Helm/Kustomize/...)  in a manageable and unified way.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kluctl.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) kluctl' as const,
  programs: [
    'kluctl',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '2.26.0',
    '2.25.1',
    '2.25.0',
    '2.24.1',
    '2.24.0',
    '2.23.5',
    '2.23.4',
    '2.23.3',
    '2.23.2',
    '2.23.1',
    '2.23.0',
    '2.22.1',
    '2.22.0',
    '2.21.2',
  ] as const,
  fullPath: 'kluctl.io' as const,
}

export type KluctlioPackage = typeof kluctlioPackage
