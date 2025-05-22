/**
 * Generated from pkgx.dev data
 */
export const cairographicsorgPackage = {
  programs: [
    "cairo-trace",
  ] as const,
  companions: [] as const,
  dependencies: [
    "libpng.org@1",
    "pixman.org^0.40.0",
    "freetype.org@2",
    "gnome.org/glib@2",
    "freedesktop.org/fontconfig@2",
    "sourceware.org/bzip2@1",
    "x.org/x11",
    "x.org/xcb",
    "x.org/exts",
    "x.org/xrender",
    "oberhumer.com/lzo",
  ] as const,
  versions: [
    "1.18.4",
    "1.18.2",
    "1.18.0",
    "1.16.0",
  ] as const,
  aliases: [
    "cairo-trace",
  ] as const,
  name: "cairographics.org" as const,
  domain: "cairographics.org" as const,
  description: "Package information for cairographics.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/cairographics.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +cairographics.org -- $SHELL -i" as const,
}

export type CairographicsorgPackage = typeof cairographicsorgPackage
