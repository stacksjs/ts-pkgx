/**
 * Generated from pkgx.dev data
 */
export const cruftgithubioPackage = {
  programs: [
    "cruft",
  ] as const,
  companions: [] as const,
  dependencies: [
    "python.org>=3.7<3.12",
    "git-scm.org^2",
  ] as const,
  versions: [
    "2.16.0",
    "2.15.0",
  ] as const,
  name: "cruft.github.io" as const,
  domain: "cruft.github.io" as const,
  description: "Package information for cruft.github.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/cruft.github.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +cruft.github.io -- $SHELL -i" as const,
}

export type CruftgithubioPackage = typeof cruftgithubioPackage
