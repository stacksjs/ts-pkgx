export const wxwidgetsorgPackage = {
  name: 'wxwidgets.org' as const,
  domain: 'wxwidgets.org' as const,
  description: 'Cross-Platform C++ GUI Library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wxwidgets.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +wxwidgets.org -- $SHELL -i' as const,
  programs: [
    'wx-config',
    'wxrc',
  ] as const,
  companions: [] as const,
  dependencies: [
    'libjpeg-turbo.org',
    'libpng.org',
    'simplesystems.org/libtiff',
    'pcre.org/v2',
    'libexpat.github.io',
    'zlib.net',
    'linuxx.org/smfreedesktop.org/mesa-glugtk.org/gtk3',
    'x.org/sm',
    'freedesktop.org/mesa-glu',
    'gtk.org/gtk3',
  ] as const,
  versions: [
    '3.2.8',
    '3.2.7',
    '3.2.6',
    '3.2.5',
    '3.2.4',
    '3.2.3',
  ] as const,
  fullPath: 'wxwidgets.org' as const,
  aliases: undefined,
}

export type WxwidgetsorgPackage = typeof wxwidgetsorgPackage
