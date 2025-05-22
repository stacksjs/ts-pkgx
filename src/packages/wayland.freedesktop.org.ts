export const waylandfreedesktoporgPackage = {
  name: "wayland" as const,
  domain: "wayland.freedesktop.org" as const,
  description: "" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/wayland.freedesktop.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) wayland-scanner" as const,
  programs: [
    "wayland-scanner",
  ] as const,
  companions: [] as const,
  dependencies: [
    "libexpat.github.io",
    "sourceware.org/libffi",
    "gnome.org/libxml2",
  ] as const,
  versions: [
    "1.23.91",
    "1.23.1",
    "1.23.0",
    "1.22.93",
    "1.22.92",
    "1.22.91",
    "1.22.0",
  ] as const,
  fullPath: "wayland.freedesktop.org" as const,
}

export type WaylandfreedesktoporgPackage = typeof waylandfreedesktoporgPackage
