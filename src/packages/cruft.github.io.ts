export const cruftgithubioPackage = {
  name: "cruft" as const,
  domain: "cruft.github.io" as const,
  description: "Allows you to maintain all the necessary cruft for packaging and building projects separate from the code you intentionally write. Built on-top of, and fully compatible with, CookieCutter." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/cruft.github.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) cruft" as const,
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
  fullPath: "cruft.github.io" as const,
}

export type CruftgithubioPackage = typeof cruftgithubioPackage
