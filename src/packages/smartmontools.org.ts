/**
 * Generated from pkgx.dev data
 */
export const smartmontoolsorgPackage = {
  programs: [
    "smartctl",
    "smartd",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "7.5.0",
    "7.4.0",
    "7.3.0",
  ] as const,
  name: "smartmontools.org" as const,
  domain: "smartmontools.org" as const,
  description: "Package information for smartmontools.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/smartmontools.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +smartmontools.org -- $SHELL -i" as const,
}

export type SmartmontoolsorgPackage = typeof smartmontoolsorgPackage
