export const replibytecomPackage = {
  name: 'replibyte' as const,
  domain: 'replibyte.com' as const,
  description: 'Seed your development database with real data ⚡️' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/replibyte.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) replibyte' as const,
  programs: [
    'replibyte',
  ] as const,
  companions: [] as const,
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  versions: [
    '0.10.0',
  ] as const,
  fullPath: 'replibyte.com' as const,
}

export type ReplibytecomPackage = typeof replibytecomPackage
