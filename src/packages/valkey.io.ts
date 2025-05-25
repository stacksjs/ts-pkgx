export const valkeyioPackage = {
  name: 'valkey' as const,
  domain: 'valkey.io' as const,
  description: 'A flexible distributed key-value datastore that is optimized for caching and other realtime workloads.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/valkey.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +valkey.io -- $SHELL -i' as const,
  programs: [
    'valkey-server',
    'valkey-cli',
    'valkey-benchmark',
  ] as const,
  companions: [] as const,
  dependencies: [
    'openssl.org^1',
  ] as const,
  versions: [
    '8.1.1',
    '8.1.0',
    '8.0.3',
    '8.0.2',
    '8.0.1',
    '8.0.0',
    '7.2.9',
    '7.2.8',
    '7.2.7',
    '7.2.6',
    '7.2.5',
  ] as const,
  fullPath: 'valkey.io' as const,
  aliases: [] as const,
}

export type ValkeyioPackage = typeof valkeyioPackage
