export const xkbcommonorgPackage = {
  name: 'xkbcli' as const,
  domain: 'xkbcommon.org' as const,
  description: 'keymap handling library for toolkits and window systems' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xkbcommon.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) xkbcli' as const,
  programs: [
    'xkbcli',
  ] as const,
  companions: [] as const,
  dependencies: [
    'x.org/x11',
    'x.org/xcb',
    'freedesktop.org/XKeyboardConfig',
    'gnome.org/libxml2',
  ] as const,
  versions: [
    '1.10.0',
    '1.9.2',
    '1.9.1',
    '1.9.0',
    '1.8.1',
    '1.8.0',
    '1.7.0',
    '1.6.0',
    '1.5.0',
  ] as const,
  fullPath: 'xkbcommon.org' as const,
  aliases: [
    'xkbcli',
  ] as const,
}

export type XkbcommonorgPackage = typeof xkbcommonorgPackage
