/**
 * Generated from pkgx.dev data
 */
export const xkbcommonorgPackage = {
  programs: [
    "xkbcli",
  ] as const,
  companions: [] as const,
  dependencies: [
    "x.org/x11",
    "x.org/xcb",
    "freedesktop.org/XKeyboardConfig",
    "gnome.org/libxml2",
  ] as const,
  versions: [
    "1.10.0",
    "1.9.2",
    "1.9.1",
    "1.9.0",
    "1.8.1",
    "1.8.0",
    "1.7.0",
    "1.6.0",
    "1.5.0",
  ] as const,
  aliases: [
    "xkbcli",
  ] as const,
  name: "xkbcommon.org" as const,
  domain: "xkbcommon.org" as const,
  description: "Package information for xkbcommon.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/xkbcommon.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +xkbcommon.org -- $SHELL -i" as const,
}

export type XkbcommonorgPackage = typeof xkbcommonorgPackage
