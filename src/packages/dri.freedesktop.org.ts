export const drifreedesktoporgPackage = {
  name: 'libdrm' as const,
  domain: 'dri.freedesktop.org' as const,
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dri.freedesktop.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +dri.freedesktop.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    'x.org/pciaccess',
  ] as const,
  versions: [
    '2.4.124',
    '2.4.123',
    '2.4.122',
    '2.4.121',
    '2.4.120',
    '2.4.119',
    '2.4.118',
    '2.4.117',
    '2.4.116',
    '2.4.100',
  ] as const,
  fullPath: 'dri.freedesktop.org' as const,
  aliases: [
    'libdrm',
  ] as const,
}

export type DrifreedesktoporgPackage = typeof drifreedesktoporgPackage
