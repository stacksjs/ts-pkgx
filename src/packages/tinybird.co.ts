/**
 * Generated from pkgx.dev data
 */
export const tinybirdcoPackage = {
  programs: [
    "tb",
  ] as const,
  companions: [] as const,
  dependencies: [
    "pkgx.sh^1",
  ] as const,
  versions: [
    "5.20.0",
  ] as const,
  aliases: [
    "tb",
  ] as const,
  name: "tinybird.co" as const,
  domain: "tinybird.co" as const,
  description: "Package information for tinybird.co" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/tinybird.co/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +tinybird.co -- $SHELL -i" as const,
}

export type TinybirdcoPackage = typeof tinybirdcoPackage
