/**
 * Generated from pkgx.dev data
 */
export const ryeastralshPackage = {
  programs: [
    "rye",
  ] as const,
  companions: [] as const,
  dependencies: [
    "curl.se/ca-certs",
  ] as const,
  versions: [
    "0.44.0",
    "0.43.0",
    "0.42.0",
    "0.41.0",
    "0.40.0",
    "0.39.0",
    "0.38.0",
    "0.37.0",
    "0.36.0",
  ] as const,
  name: "rye.astral.sh" as const,
  domain: "rye.astral.sh" as const,
  description: "Package information for rye.astral.sh" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/rye.astral.sh/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +rye.astral.sh -- $SHELL -i" as const,
}

export type RyeastralshPackage = typeof ryeastralshPackage
