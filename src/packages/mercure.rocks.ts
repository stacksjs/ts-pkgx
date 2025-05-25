export const mercurerocksPackage = {
  name: 'mercure' as const,
  domain: 'mercure.rocks' as const,
  description: '🪽 An open, easy, fast, reliable and battery-efficient solution for real-time communications' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mercure.rocks/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) mercure' as const,
  programs: [
    'mercure',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.19.2',
    '0.19.1',
    '0.19.0',
    '0.18.4',
    '0.18.3',
    '0.18.2',
    '0.18.1',
    '0.18.0',
    '0.17.1',
    '0.17.0',
    '0.16.3',
  ] as const,
  fullPath: 'mercure.rocks' as const,
  aliases: [] as const,
}

export type MercurerocksPackage = typeof mercurerocksPackage
