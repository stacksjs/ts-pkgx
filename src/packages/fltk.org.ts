/**
 * Generated from pkgx.dev data
 */
export const fltkorgPackage = {
  programs: [
    "fluid",
    "fltk-config",
  ] as const,
  companions: [] as const,
  dependencies: [
    "libjpeg-turbo.org^2",
    "libpng.org^1",
    "linuxx.org/xft^2x.org/xt^1freedesktop.org/mesa-glu^9",
    "x.org/xft^2",
    "x.org/xt^1",
    "freedesktop.org/mesa-glu^9",
  ] as const,
  versions: [
    "1.4.3",
    "1.4.2",
    "1.4.1",
    "1.3.11",
    "1.3.10",
    "1.3.9",
  ] as const,
  name: "fltk.org" as const,
  domain: "fltk.org" as const,
  description: "Package information for fltk.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/fltk.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +fltk.org -- $SHELL -i" as const,
}

export type FltkorgPackage = typeof fltkorgPackage
