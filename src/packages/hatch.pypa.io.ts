export const hatchpypaioPackage = {
  name: 'hatch' as const,
  domain: 'hatch.pypa.io' as const,
  description: 'Modern, extensible Python project management' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hatch.pypa.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) hatch' as const,
  programs: [
    'hatch',
  ] as const,
  companions: [] as const,
  dependencies: [
    'python.org>=3<3.12',
  ] as const,
  versions: [
    '1.14.1',
    '1.14.0',
    '1.13.0',
    '1.12.0',
    '1.11.1',
    '1.11.0',
    '1.10.0',
    '1.9.7',
    '1.9.6',
    '1.9.5',
    '1.9.4',
    '1.9.3',
    '1.9.2',
    '1.9.1',
    '1.9.0',
    '1.8.1',
    '1.8.0',
    '1.7.0',
  ] as const,
  fullPath: 'hatch.pypa.io' as const,
}

export type HatchpypaioPackage = typeof hatchpypaioPackage
