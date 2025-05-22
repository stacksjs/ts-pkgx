export const nanoeditororgPackage = {
  name: "nano" as const,
  domain: "nano-editor.org" as const,
  description: "Free (GNU) replacement for the Pico text editor" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/nano-editor.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) nano" as const,
  programs: [
    "nano",
  ] as const,
  companions: [] as const,
  dependencies: [
    "gnu.org/gettext",
    "invisible-island.net/ncurses>=6.0",
  ] as const,
  versions: [
    "8.0.0",
    "7.2.0",
  ] as const,
  fullPath: "nano-editor.org" as const,
}

export type NanoeditororgPackage = typeof nanoeditororgPackage
