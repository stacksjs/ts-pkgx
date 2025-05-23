export const elementsprojectorgPackage = {
  name: 'elementsproject.org' as const,
  domain: 'elementsproject.org' as const,
  description: 'Open Source implementation of advanced blockchain features extending the Bitcoin protocol' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/elementsproject.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +elementsproject.org -- $SHELL -i' as const,
  programs: [
    'bench_bitcoin',
    'elements-cli',
    'elements-tx',
    'elements-util',
    'elements-wallet',
    'elementsd',
    'test_bitcoin',
  ] as const,
  companions: [] as const,
  dependencies: [
    'boost.org^1.64',
    'libevent.org',
    'oracle.com/berkeley-db',
  ] as const,
  versions: [
    '23.3.0',
    '23.2.7',
    '23.2.6',
    '23.2.5',
    '23.2.4',
    '23.2.3',
    '23.2.2',
    '23.2.1',
    '22.1.1',
  ] as const,
  fullPath: 'elementsproject.org' as const,
}

export type ElementsprojectorgPackage = typeof elementsprojectorgPackage
