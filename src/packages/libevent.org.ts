export const libeventorgPackage = {
  name: 'libevent.org' as const,
  domain: 'libevent.org' as const,
  description: 'Event notification library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libevent.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +libevent.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  versions: [
    '2.1.12',
  ] as const,
  fullPath: 'libevent.org' as const,
}

export type LibeventorgPackage = typeof libeventorgPackage
