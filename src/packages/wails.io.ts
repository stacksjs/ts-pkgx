export const wailsioPackage = {
  name: 'wails' as const,
  domain: 'wails.io' as const,
  description: 'Create beautiful applications using Go' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wails.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) wails' as const,
  programs: [
    'wails',
  ] as const,
  companions: [] as const,
  dependencies: [
    'go.dev^1.18',
    'npmjs.com',
    'linuxgnu.org/gccgtk.org/gtk3freedesktop.org/pkg-config',
    'gnu.org/gcc',
    'gtk.org/gtk3',
    'freedesktop.org/pkg-config',
  ] as const,
  versions: [
    '2.10.1',
    '2.10.0',
    '2.9.3',
    '2.9.2',
    '2.9.1',
    '2.9.0',
    '2.8.2',
    '2.8.1',
    '2.8.0',
  ] as const,
  fullPath: 'wails.io' as const,
  aliases: undefined,
}

export type WailsioPackage = typeof wailsioPackage
