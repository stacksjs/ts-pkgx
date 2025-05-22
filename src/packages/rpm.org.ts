/**
 * Generated from pkgx.dev data
 */
export const rpmorgPackage = {
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  name: "rpm.org" as const,
  domain: "rpm.org" as const,
  description: "Package information for rpm.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/rpm.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +rpm.org -- $SHELL -i" as const,
}

export type RpmorgPackage = typeof rpmorgPackage
