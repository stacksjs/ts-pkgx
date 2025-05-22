/**
 * Generated from pkgx.dev data
 */
export const httpieioPackage = {
  programs: [
    "http",
    "httpie",
    "https",
  ] as const,
  companions: [] as const,
  dependencies: [
    "python.org>=3<3.12",
  ] as const,
  versions: [
    "3.2.4",
    "3.2.3",
    "3.2.2",
    "3.2.1",
  ] as const,
  name: "httpie.io" as const,
  domain: "httpie.io" as const,
  description: "Package information for httpie.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/httpie.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +httpie.io -- $SHELL -i" as const,
}

export type HttpieioPackage = typeof httpieioPackage
