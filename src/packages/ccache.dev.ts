export const ccachedevPackage = {
  name: 'ccache' as const,
  domain: 'ccache.dev' as const,
  description: 'Object-file caching compiler wrapper' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ccache.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) ccache' as const,
  programs: [
    'ccache',
  ] as const,
  companions: [] as const,
  dependencies: [
    'github.com/redis/hiredis',
    'facebook.com/zstd',
  ] as const,
  versions: [
    '4.11.3',
    '4.11.2',
    '4.11.1',
    '4.11.0',
    '4.10.2',
    '4.10.1',
    '4.10.0',
    '4.9.1',
    '4.9.0',
    '4.8.3',
  ] as const,
  fullPath: 'ccache.dev' as const,
}

export type CcachedevPackage = typeof ccachedevPackage
