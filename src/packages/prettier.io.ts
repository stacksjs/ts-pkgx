/**
 * Generated from pkgx.dev data
 */
export const prettierioPackage = {
  programs: [
    "prettier",
  ] as const,
  companions: [] as const,
  dependencies: [
    "nodejs.org^20",
  ] as const,
  versions: [
    "3.5.3",
    "3.5.2",
    "3.5.1",
    "3.5.0",
    "3.4.2",
    "3.4.1",
    "3.4.0",
    "3.3.3",
    "3.3.2",
    "3.3.1",
    "3.3.0",
    "3.2.5",
  ] as const,
  name: "prettier.io" as const,
  domain: "prettier.io" as const,
  description: "Package information for prettier.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/prettier.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +prettier.io -- $SHELL -i" as const,
}

export type PrettierioPackage = typeof prettierioPackage
