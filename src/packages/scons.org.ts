/**
 * Generated from pkgx.dev data
 */
export const sconsorgPackage = {
  programs: [
    "scons",
  ] as const,
  companions: [] as const,
  dependencies: [
    "python.org~3.11",
    "linuxgnu.org/gcc>=10",
    "gnu.org/gcc>=10",
  ] as const,
  versions: [
    "4.9.1",
    "4.9.0",
    "4.8.1",
    "4.8.0",
    "4.7.0",
    "4.6.0",
    "4.5.2",
  ] as const,
  name: "scons.org" as const,
  domain: "scons.org" as const,
  description: "Package information for scons.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/scons.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +scons.org -- $SHELL -i" as const,
}

export type SconsorgPackage = typeof sconsorgPackage
