/**
 * Generated from pkgx.dev data
 */
export const onefetchdevPackage = {
  programs: [
    "onefetch",
  ] as const,
  companions: [] as const,
  dependencies: [
    "libgit2.org~1.7",
  ] as const,
  versions: [
    "2.24.0",
    "2.23.1",
    "2.23.0",
    "2.22.0",
    "2.21.0",
    "2.20.0",
    "2.19.0",
    "2.18.1",
  ] as const,
  name: "onefetch.dev" as const,
  domain: "onefetch.dev" as const,
  description: "Package information for onefetch.dev" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/onefetch.dev/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +onefetch.dev -- $SHELL -i" as const,
}

export type OnefetchdevPackage = typeof onefetchdevPackage
