/**
 * Generated from pkgx.dev data
 */
export const re2corgPackage = {
  programs: [
    "re2c",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "4.2.0",
    "4.1.0",
    "4.0.2",
    "4.0.1",
    "4.0.0",
    "3.1.0",
    "3.0.0",
  ] as const,
  name: "re2c.org" as const,
  domain: "re2c.org" as const,
  description: "Package information for re2c.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/re2c.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +re2c.org -- $SHELL -i" as const,
}

export type Re2corgPackage = typeof re2corgPackage
