/**
 * Generated from pkgx.dev data
 */
export const freeglutsourceforgeioPackage = {
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    "x.org/x11",
    "x.org/xi",
    "x.org/xrandr",
    "x.org/xxf86vm",
    "mesa3d.org",
    "linuxfreedesktop.org/mesa-glux.org/xinput",
    "freedesktop.org/mesa-glu",
    "x.org/xinput",
  ] as const,
  versions: [
    "3.6.0",
    "3.4.0",
  ] as const,
  name: "freeglut.sourceforge.io" as const,
  domain: "freeglut.sourceforge.io" as const,
  description: "Package information for freeglut.sourceforge.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/freeglut.sourceforge.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +freeglut.sourceforge.io -- $SHELL -i" as const,
}

export type FreeglutsourceforgeioPackage = typeof freeglutsourceforgeioPackage
