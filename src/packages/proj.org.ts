export const projorgPackage = {
  name: 'proj' as const,
  domain: 'proj.org' as const,
  description: 'PROJ - Cartographic Projections and Coordinate Transformations Library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/proj.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) proj' as const,
  programs: [
    'proj',
  ] as const,
  companions: [] as const,
  dependencies: [
    'simplesystems.org/libtiff',
    'sqlite.org',
    'curl.se',
  ] as const,
  versions: [
    '9.6.0',
    '9.5.1',
    '9.5.0',
    '9.4.1',
    '9.4.0',
    '9.3.1',
    '9.3.0',
    '9.2.1',
    '9.2.0',
  ] as const,
  fullPath: 'proj.org' as const,
  aliases: [] as const,
}

export type ProjorgPackage = typeof projorgPackage
