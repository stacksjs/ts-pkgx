export const tcllangorgPackage = {
  name: 'tcl-lang.org' as const,
  domain: 'tcl-lang.org' as const,
  description: 'Tool Command Language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tcl-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +tcl-lang.org -- $SHELL -i' as const,
  programs: [
    'tclsh',
    'wish',
    'critcl',
  ] as const,
  companions: [] as const,
  dependencies: [
    'openssl.org^1.1',
    'zlib.net^1.3',
    'freetype.org^2',
    'freedesktop.org/pkg-config^0.29',
    'x.org/x11=1.8.11',
    'x.org/exts^1',
  ] as const,
  versions: [
    '9.0.1',
    '9.0.0',
    '8.6.16',
    '8.6.15',
    '8.6.14',
    '8.6.13',
  ] as const,
  fullPath: 'tcl-lang.org' as const,
}

export type TcllangorgPackage = typeof tcllangorgPackage
