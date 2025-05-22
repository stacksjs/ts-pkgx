/**
 * Generated from pkgx.dev data
 */
export const voltashPackage = {
  programs: [
    "volta",
  ] as const,
  companions: [] as const,
  dependencies: [
    "linuxcurl.se/ca-certs",
    "curl.se/ca-certs",
  ] as const,
  versions: [
    "2.0.2",
    "2.0.1",
    "2.0.0",
    "1.1.1",
  ] as const,
  name: "volta.sh" as const,
  domain: "volta.sh" as const,
  description: "Package information for volta.sh" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/volta.sh/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +volta.sh -- $SHELL -i" as const,
}

export type VoltashPackage = typeof voltashPackage
