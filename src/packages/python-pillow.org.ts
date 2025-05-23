export const pythonpilloworgPackage = {
  name: 'python-pillow.org' as const,
  domain: 'python-pillow.org' as const,
  description: 'Python Imaging Library (Fork)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/python-pillow.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +python-pillow.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    'libjpeg-turbo.org^2',
    'pngquant.org/lib^4',
    'simplesystems.org/libtiff^4',
    'x.org/xcb^1',
    'littlecms.com^2',
    'openjpeg.org^2',
    'tcl.tk/tcl^8',
    'google.com/webp^1',
    'zlib.net^1',
    'python.org~3.12',
  ] as const,
  versions: [
    '11.2.1',
    '11.1.0',
    '11.0.0',
    '10.4.0',
    '10.3.0',
    '10.2.0',
  ] as const,
  fullPath: 'python-pillow.org' as const,
}

export type PythonpilloworgPackage = typeof pythonpilloworgPackage
