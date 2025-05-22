/**
 * Generated from pkgx.dev data
 */
export const keephqdevPackage = {
  programs: [
    "keep",
  ] as const,
  companions: [] as const,
  dependencies: [
    "python.org>=3<3.12",
  ] as const,
  versions: [
    "0.0.0",
  ] as const,
  name: "keephq.dev" as const,
  domain: "keephq.dev" as const,
  description: "Package information for keephq.dev" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/keephq.dev/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +keephq.dev -- $SHELL -i" as const,
}

export type KeephqdevPackage = typeof keephqdevPackage
