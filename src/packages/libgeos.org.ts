export const libgeosorgPackage = {
  name: 'geos-config' as const,
  domain: 'libgeos.org' as const,
  description: 'Geometry Engine, Open Source' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libgeos.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) geos-config' as const,
  programs: [
    'geos-config',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '3.13.1',
    '3.13.0',
    '3.12.3',
    '3.12.2',
    '3.12.1',
    '3.12.0',
    '3.11.5',
    '3.11.4',
    '3.11.3',
    '3.11.2',
    '3.10.7',
    '3.10.6',
    '3.9.6',
    '3.9.5',
    '3.8.4',
  ] as const,
  fullPath: 'libgeos.org' as const,
  aliases: [
    'geos-config',
  ] as const,
}

export type LibgeosorgPackage = typeof libgeosorgPackage
