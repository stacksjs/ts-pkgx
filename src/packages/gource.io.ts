export const gourceioPackage = {
  name: 'gource' as const,
  domain: 'gource.io' as const,
  description: 'software version control visualization' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gource.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) gource' as const,
  programs: [
    'gource',
  ] as const,
  companions: [] as const,
  dependencies: [
    'boost.org^1.82',
    'freetype.org^2',
    'libpng.org^1.6',
    'pcre.org/v2^10',
    'libsdl.org^2',
    'glew.sourceforge.io^2',
    'libsdl.org/SDL_image^2',
  ] as const,
  versions: [
    '0.55.0',
    '0.54.0',
  ] as const,
  fullPath: 'gource.io' as const,
  aliases: [] as const,
}

export type GourceioPackage = typeof gourceioPackage
