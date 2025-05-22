/**
 * Generated from pkgx.dev data
 */
export const gnuplotinfoPackage = {
  programs: [
    "gnuplot",
  ] as const,
  companions: [] as const,
  dependencies: [
    "libgd.github.io",
    "lua.org",
    "gnome.org/pango",
    "gnu.org/readline",
    "linuxgithub.com/AOMediaCodec/libavif^0.11",
    "github.com/AOMediaCodec/libavif^0.11",
  ] as const,
  versions: [
    "6.0.2",
    "6.0.1",
    "6.0.0",
    "5.4.10",
    "5.4.9",
    "5.4.8",
    "5.4.7",
    "5.4.6",
  ] as const,
  name: "gnuplot.info" as const,
  domain: "gnuplot.info" as const,
  description: "Package information for gnuplot.info" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/gnuplot.info/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +gnuplot.info -- $SHELL -i" as const,
}

export type GnuplotinfoPackage = typeof gnuplotinfoPackage
