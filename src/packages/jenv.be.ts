/**
 * Generated from pkgx.dev data
 */
export const jenvbePackage = {
  programs: [
    "jenv",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "0.5.7",
    "0.5.6",
  ] as const,
  name: "jenv.be" as const,
  domain: "jenv.be" as const,
  description: "Package information for jenv.be" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/jenv.be/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +jenv.be -- $SHELL -i" as const,
}

export type JenvbePackage = typeof jenvbePackage
