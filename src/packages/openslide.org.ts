export const openslideorgPackage = {
  name: 'openslide' as const,
  domain: 'openslide.org' as const,
  description: 'C library to read whole-slide images (a.k.a. virtual slides)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openslide.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +openslide.org -- $SHELL -i' as const,
  programs: [
    'openslide-quickhash1sum',
    'openslide-show-properties',
    'openslide-write-png',
  ] as const,
  companions: [] as const,
  dependencies: [
    'cairographics.org',
    'gnome.org/gdk-pixbuf',
    'gnome.org/glib',
    'libjpeg-turbo.org',
    'libpng.org',
    'simplesystems.org/libtiff',
    'gnome.org/libxml2',
    'openjpeg.org',
    'sqlite.org',
  ] as const,
  versions: [
    '4.0.0',
    '3.4.1',
  ] as const,
  fullPath: 'openslide.org' as const,
  aliases: [] as const,
}

export type OpenslideorgPackage = typeof openslideorgPackage
