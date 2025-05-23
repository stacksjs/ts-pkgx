export const pcreorgPackage = {
  name: 'pcre' as const,
  domain: 'pcre.org' as const,
  description: 'Perl compatible regular expressions library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pcre.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +pcre.org -- $SHELL -i' as const,
  programs: [
    'pcre-config',
    'pcregrep',
    'pcretest',
  ] as const,
  companions: [] as const,
  dependencies: [
    'sourceware.org/bzip2@1',
    'zlib.net@1',
  ] as const,
  versions: [
    '8.45.0',
  ] as const,
  fullPath: 'pcre.org' as const,
}

export type PcreorgPackage = typeof pcreorgPackage
