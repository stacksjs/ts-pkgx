/**
 * Generated from pkgx.dev data
 */
export const toxwikiPackage = {
  programs: [
    "tox",
  ] as const,
  companions: [] as const,
  dependencies: [
    "pkgx.sh^1",
  ] as const,
  versions: [
    "4.26.0",
    "4.25.0",
    "4.24.2",
    "4.24.1",
    "4.24.0",
    "4.23.2",
    "4.23.1",
    "4.23.0",
    "4.22.0",
    "4.21.2",
    "4.21.1",
    "4.21.0",
    "4.20.0",
    "4.19.0",
    "4.18.1",
  ] as const,
  name: "tox.wiki" as const,
  domain: "tox.wiki" as const,
  description: "Package information for tox.wiki" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/tox.wiki/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +tox.wiki -- $SHELL -i" as const,
}

export type ToxwikiPackage = typeof toxwikiPackage
