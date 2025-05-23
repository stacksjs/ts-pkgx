export const raccoinorgPackage = {
  name: 'raccoin' as const,
  domain: 'raccoin.org' as const,
  description: 'Crypto Portfolio and Tax Reporting Tool' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/raccoin.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) raccoin' as const,
  programs: [
    'raccoin',
  ] as const,
  companions: [] as const,
  dependencies: [
    'gnu.org/libiconv^1',
    'openssl.org^1.1',
  ] as const,
  versions: [
    '0.2.0',
    '0.1.0',
  ] as const,
  fullPath: 'raccoin.org' as const,
}

export type RaccoinorgPackage = typeof raccoinorgPackage
