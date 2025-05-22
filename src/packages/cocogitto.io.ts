/**
 * Generated from pkgx.dev data
 */
export const cocogittoioPackage = {
  programs: [
    "cog",
  ] as const,
  companions: [] as const,
  dependencies: [
    "libgit2.org~1.7",
  ] as const,
  versions: [
    "6.3.0",
    "6.2.0",
    "6.1.0",
    "6.0.1",
    "6.0.0",
    "5.6.0",
    "5.5.0",
  ] as const,
  aliases: [
    "cog",
  ] as const,
  name: "cocogitto.io" as const,
  domain: "cocogitto.io" as const,
  description: "Package information for cocogitto.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/cocogitto.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +cocogitto.io -- $SHELL -i" as const,
}

export type CocogittoioPackage = typeof cocogittoioPackage
