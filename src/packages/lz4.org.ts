export const lz4orgPackage = {
  name: 'lz4' as const,
  domain: 'lz4.org' as const,
  description: 'Extremely Fast Compression algorithm' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lz4.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) lz4' as const,
  programs: [
    'lz4',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.10.0',
    '1.9.4',
  ] as const,
  fullPath: 'lz4.org' as const,
  aliases: [] as const,
}

export type Lz4orgPackage = typeof lz4orgPackage
