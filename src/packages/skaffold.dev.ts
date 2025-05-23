export const skaffolddevPackage = {
  name: 'skaffold' as const,
  domain: 'skaffold.dev' as const,
  description: 'Easy and Repeatable Kubernetes Development' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/skaffold.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) skaffold' as const,
  programs: [
    'skaffold',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '2.16.0',
    '2.15.0',
    '2.14.2',
    '2.14.1',
    '2.14.0',
    '2.13.2',
    '2.13.0',
    '2.12.0',
    '2.11.1',
    '2.11.0',
    '2.10.1',
    '2.10.0',
    '2.9.0',
    '2.8.0',
  ] as const,
  fullPath: 'skaffold.dev' as const,
}

export type SkaffolddevPackage = typeof skaffolddevPackage
