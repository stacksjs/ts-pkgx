export const plocatesessenetPackage = {
  name: 'plocate.sesse.net' as const,
  domain: 'plocate.sesse.net' as const,
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/plocate.sesse.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +plocate.sesse.net -- $SHELL -i' as const,
  programs: [
    'plocate',
    'plocate-build',
    'updatedb',
  ] as const,
  companions: [] as const,
  dependencies: [
    'facebook.com/zstd@1',
    'gnu.org/gcc/libstdcxx@14',
  ] as const,
  versions: [
    '1.1.23',
    '1.1.22',
  ] as const,
  fullPath: 'plocate.sesse.net' as const,
}

export type PlocatesessenetPackage = typeof plocatesessenetPackage
