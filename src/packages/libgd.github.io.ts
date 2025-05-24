export const libgdgithubioPackage = {
  name: 'libgd.github.io' as const,
  domain: 'libgd.github.io' as const,
  description: 'Graphics library to dynamically manipulate images' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libgd.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +libgd.github.io -- $SHELL -i' as const,
  programs: [
    'bdftogd',
    'gd2copypal',
    'gd2togif',
    'gdcmpgif',
    'giftogd2',
  ] as const,
  companions: [] as const,
  dependencies: [
    'freedesktop.org/fontconfig',
    'freetype.org',
    'libjpeg-turbo.org',
    'github.com/AOMediaCodec/libavif',
    'libpng.org',
    'simplesystems.org/libtiff',
    'google.com/webp',
    'zlib.net',
  ] as const,
  versions: [
    '2.3.3',
  ] as const,
  fullPath: 'libgd.github.io' as const,
  aliases: [] as const,
}

export type LibgdgithubioPackage = typeof libgdgithubioPackage
