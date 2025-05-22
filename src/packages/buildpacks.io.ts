/**
 * Generated from pkgx.dev data
 */
export const buildpacksioPackage = {
  programs: [
    "pack",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.37.0",
    "0.36.4",
    "0.36.3",
    "0.36.2",
    "0.36.1",
    "0.36.0",
    "0.35.1",
    "0.35.0",
    "0.34.2",
    "0.34.1",
    "0.34.0",
    "0.33.2",
  ] as const,
  aliases: [
    "pack",
  ] as const,
  name: "buildpacks.io" as const,
  domain: "buildpacks.io" as const,
  description: "Package information for buildpacks.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/buildpacks.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +buildpacks.io -- $SHELL -i" as const,
}

export type BuildpacksioPackage = typeof buildpacksioPackage
