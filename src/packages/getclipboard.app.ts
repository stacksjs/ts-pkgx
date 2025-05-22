/**
 * Generated from pkgx.dev data
 */
export const getclipboardappPackage = {
  programs: [
    "cb",
  ] as const,
  companions: [] as const,
  dependencies: [
    "openssl.org^1.1",
    "linuxalsa-project.org/alsa-lib@1x.org/x11@1wayland.freedesktop.org@1gnu.org/gcc/libstdcxx@14",
    "alsa-project.org/alsa-lib@1",
    "x.org/x11@1",
    "wayland.freedesktop.org@1",
    "gnu.org/gcc/libstdcxx@14",
  ] as const,
  versions: [
    "0.9.1",
    "0.9.0.1",
    "0.10.0",
  ] as const,
  aliases: [
    "cb",
  ] as const,
  name: "getclipboard.app" as const,
  domain: "getclipboard.app" as const,
  description: "Package information for getclipboard.app" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/getclipboard.app/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +getclipboard.app -- $SHELL -i" as const,
}

export type GetclipboardappPackage = typeof getclipboardappPackage
