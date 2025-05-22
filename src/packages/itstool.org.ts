/**
 * Generated from pkgx.dev data
 */
export const itstoolorgPackage = {
  programs: [
    "itstool",
  ] as const,
  companions: [] as const,
  dependencies: [
    "gnome.org/libxml2",
    "python.org~3.11",
  ] as const,
  versions: [
    "2.0.7",
  ] as const,
  name: "itstool.org" as const,
  domain: "itstool.org" as const,
  description: "Package information for itstool.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/itstool.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +itstool.org -- $SHELL -i" as const,
}

export type ItstoolorgPackage = typeof itstoolorgPackage
