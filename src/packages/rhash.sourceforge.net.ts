export const rhashsourceforgenetPackage = {
  name: 'rhash.sourceforge.net' as const,
  domain: 'rhash.sourceforge.net' as const,
  description: 'Utility for computing and verifying hash sums of files' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rhash.sourceforge.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +rhash.sourceforge.net -- $SHELL -i' as const,
  programs: [
    'whirlpool-hash',
    'tiger-hash',
    'tth-hash',
    'rhash',
    'sfv-hash',
    'magnet-link',
    'has160-hash',
    'gost12-256-hash',
    'gost12-512-hash',
    'edonr512-hash',
    'edonr256-hash',
    'ed2k-link',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.4.6',
    '1.4.5',
    '1.4.4',
    '1.4.3',
  ] as const,
  fullPath: 'rhash.sourceforge.net' as const,
}

export type RhashsourceforgenetPackage = typeof rhashsourceforgenetPackage
