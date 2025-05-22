/**
 * Generated from pkgx.dev data
 */
export const pluralithcomPackage = {
  programs: [
    "pluralith",
  ] as const,
  companions: [] as const,
  dependencies: [
    "curl.se/ca-certs",
  ] as const,
  versions: [
    "0.2.2",
  ] as const,
  name: "pluralith.com" as const,
  domain: "pluralith.com" as const,
  description: "Package information for pluralith.com" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/pluralith.com/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +pluralith.com -- $SHELL -i" as const,
}

export type PluralithcomPackage = typeof pluralithcomPackage
