export const jujuisPackage = {
  name: 'juju' as const,
  domain: 'juju.is' as const,
  description: 'Orchestration engine that enables the deployment, integration and lifecycle management of applications at any scale, on any infrastructure (Kubernetes or otherwise).' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/juju.is/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) juju' as const,
  programs: [
    'juju',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '3.6.5',
    '3.6.4',
    '3.6.3',
    '3.6.2',
    '3.6.1',
    '3.6.0',
    '3.5.7',
    '3.5.6',
    '3.5.5',
    '3.5.4',
    '3.5.3',
    '3.4.6',
    '3.3.7',
    '3.1.10',
    '2.9.51',
  ] as const,
  fullPath: 'juju.is' as const,
}

export type JujuisPackage = typeof jujuisPackage
