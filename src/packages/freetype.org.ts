export const freetypeorgPackage = {
  name: 'freetype.org' as const,
  domain: 'freetype.org' as const,
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freetype.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +freetype.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    'libpng.org@1',
    'zlib.net@1',
    'sourceware.org/bzip2@1',
  ] as const,
  versions: [
    '2.13.3',
    '2.13.2',
    '2.13.1',
    '2.12.1',
  ] as const,
  fullPath: 'freetype.org' as const,
}

export type FreetypeorgPackage = typeof freetypeorgPackage
