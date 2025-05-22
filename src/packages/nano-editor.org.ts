/**
 * Generated from pkgx.dev data
 */
export const nanoeditororgPackage = {
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
  name: "nano/editor.org" as const,
  domain: "nano/editor.org" as const,
  description: "Package information for nano/editor.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/nano/editor.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +nano/editor.org -- $SHELL -i" as const,
}

export type NanoeditororgPackage = typeof nanoeditororgPackage
