export const freeglutsourceforgeioPackage = {
  name: 'freeglut.sourceforge.io' as const,
  domain: 'freeglut.sourceforge.io' as const,
  description: 'Free implementation of the OpenGL Utility Toolkit (GLUT)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freeglut.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +freeglut.sourceforge.io -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    'x.org/x11',
    'x.org/xi',
    'x.org/xrandr',
    'x.org/xxf86vm',
    'mesa3d.org',
    'linuxfreedesktop.org/mesa-glux.org/xinput',
    'freedesktop.org/mesa-glu',
    'x.org/xinput',
  ] as const,
  versions: [
    '3.6.0',
    '3.4.0',
  ] as const,
  fullPath: 'freeglut.sourceforge.io' as const,
  aliases: [] as const,
}

export type FreeglutsourceforgeioPackage = typeof freeglutsourceforgeioPackage
