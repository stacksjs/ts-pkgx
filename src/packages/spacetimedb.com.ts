export const spacetimedbcomPackage = {
  name: 'spacetime' as const,
  domain: 'spacetimedb.com' as const,
  description: 'Multiplayer at the speed of light' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/spacetimedb.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) spacetime' as const,
  programs: [
    'spacetime',
  ] as const,
  companions: [] as const,
  dependencies: [
    'openssl.org^1',
  ] as const,
  versions: [
    '2023.12.8',
    '2023.8.12',
  ] as const,
  fullPath: 'spacetimedb.com' as const,
}

export type SpacetimedbcomPackage = typeof spacetimedbcomPackage
