/**
 * Generated from pkgx.dev data
 */
export const cointopshPackage = {
  programs: [
    "cointop",
  ] as const,
  companions: [] as const,
  dependencies: [
    "curl.se/ca-certs",
  ] as const,
  versions: [
    "1.6.10",
  ] as const,
  name: "cointop.sh" as const,
  domain: "cointop.sh" as const,
  description: "Package information for cointop.sh" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/cointop.sh/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +cointop.sh -- $SHELL -i" as const,
}

export type CointopshPackage = typeof cointopshPackage
