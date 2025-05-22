/**
 * Generated from pkgx.dev data
 */
export const sfcgalorgPackage = {
  programs: [
    "sfcgal-config",
  ] as const,
  companions: [] as const,
  dependencies: [
    "boost.org",
    "cgal.org",
    "gnu.org/gmp",
    "gnu.org/mpfr",
  ] as const,
  versions: [
    "2.1.0",
    "2.0.0",
    "1.5.2",
    "1.5.1",
    "1.5.0",
    "1.4.1",
  ] as const,
  aliases: [
    "sfcgal-config",
  ] as const,
  name: "sfcgal.org" as const,
  domain: "sfcgal.org" as const,
  description: "Package information for sfcgal.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/sfcgal.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +sfcgal.org -- $SHELL -i" as const,
}

export type SfcgalorgPackage = typeof sfcgalorgPackage
