/**
 * Generated from pkgx.dev data
 */
export const elvshPackage = {
  programs: [
    "elvish",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.21.0",
    "0.20.1",
    "0.20.0",
    "0.19.2",
  ] as const,
  aliases: [
    "elvish",
  ] as const,
  name: "elv.sh" as const,
  domain: "elv.sh" as const,
  description: "Package information for elv.sh" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/elv.sh/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +elv.sh -- $SHELL -i" as const,
}

export type ElvshPackage = typeof elvshPackage
