export const gtssourceforgenetPackage = {
  name: 'gts.sourceforge.net' as const,
  domain: 'gts.sourceforge.net' as const,
  description: 'GNU triangulated surface library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gts.sourceforge.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +gts.sourceforge.net -- $SHELL -i' as const,
  programs: [
    'delaunay',
    'gts2dxf',
    'gts2oogl',
    'gts2stl',
    'gtscheck',
    'gtscompare',
    'gtstemplate',
    'stl2gts',
    'transform',
  ] as const,
  companions: [] as const,
  dependencies: [
    'gnome.org/glib>=2.4.0',
  ] as const,
  versions: [
    '0.7.6',
  ] as const,
  fullPath: 'gts.sourceforge.net' as const,
}

export type GtssourceforgenetPackage = typeof gtssourceforgenetPackage
