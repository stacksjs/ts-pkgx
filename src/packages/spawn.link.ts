export const spawnlinkPackage = {
  name: 'spawn.link' as const,
  domain: 'spawn.link' as const,
  description: 'a featureful union filesystem' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/spawn.link/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +spawn.link -- $SHELL -i' as const,
  programs: [
    'mergerfs',
    'mergerfs-fusermount',
    'mount.mergerfs',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '2.40.2',
    '2.40.1',
    '2.40.0',
    '2.39.0',
    '2.38.0',
    '2.37.1',
    '2.37.0',
    '2.36.0',
    '2.35.1',
  ] as const,
  fullPath: 'spawn.link' as const,
}

export type SpawnlinkPackage = typeof spawnlinkPackage
