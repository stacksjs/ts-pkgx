/**
 * Generated from pkgx.dev data
 */
export const xplrdevPackage = {
  programs: [
    "xplr",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "1.0.0",
    "0.21.10",
    "0.21.9",
    "0.21.8",
  ] as const,
  name: "xplr.dev" as const,
  domain: "xplr.dev" as const,
  description: "Package information for xplr.dev" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/xplr.dev/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +xplr.dev -- $SHELL -i" as const,
}

export type XplrdevPackage = typeof xplrdevPackage
