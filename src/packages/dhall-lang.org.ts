export const dhalllangorgPackage = {
  name: 'dhall' as const,
  domain: 'dhall-lang.org' as const,
  description: 'Interpreter for the Dhall language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dhall-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) dhall' as const,
  programs: [
    'dhall',
  ] as const,
  companions: [] as const,
  dependencies: [
    'invisible-island.net/ncurses^6.4',
    'zlib.net^1.3',
  ] as const,
  versions: [
    '1.42.2',
    '1.42.1',
  ] as const,
  fullPath: 'dhall-lang.org' as const,
}

export type DhalllangorgPackage = typeof dhalllangorgPackage
