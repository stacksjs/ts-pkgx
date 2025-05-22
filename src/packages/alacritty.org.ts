/**
 * Generated from pkgx.dev data
 */
export const alacrittyorgPackage = {
  programs: [
    "alacritty",
  ] as const,
  companions: [] as const,
  dependencies: [
    "linuxfreetype.orgfreedesktop.org/fontconfig",
    "freetype.org",
    "freedesktop.org/fontconfig",
  ] as const,
  versions: [
    "0.15.1",
    "0.15.0",
    "0.14.0",
    "0.13.2",
  ] as const,
  name: "alacritty.org" as const,
  domain: "alacritty.org" as const,
  description: "Package information for alacritty.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/alacritty.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +alacritty.org -- $SHELL -i" as const,
}

export type AlacrittyorgPackage = typeof alacrittyorgPackage
