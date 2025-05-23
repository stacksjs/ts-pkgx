export const tectonictypesettinggithubioPackage = {
  name: 'tectonic' as const,
  domain: 'tectonic-typesetting.github.io' as const,
  description: 'A modernized, complete, self-contained TeX/LaTeX engine, powered by XeTeX and TeXLive.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tectonic-typesetting.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) tectonic' as const,
  programs: [
    'tectonic',
  ] as const,
  companions: [] as const,
  dependencies: [
    'freetype.org',
    'graphite.sil.org',
    'harfbuzz.org',
    'libpng.org',
    'openssl.org^1.1',
    'unicode.org^71',
  ] as const,
  versions: [
    '0.15.0',
    '0.14.1',
    '0.14.0',
    '0.13.1',
    '0.13.0',
    '0.12.0',
  ] as const,
  fullPath: 'tectonic-typesetting.github.io' as const,
}

export type TectonictypesettinggithubioPackage = typeof tectonictypesettinggithubioPackage
