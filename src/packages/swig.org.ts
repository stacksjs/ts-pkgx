/**
 * Generated from pkgx.dev data
 */
export const swigorgPackage = {
  programs: [
    "swig",
    "ccache-swig",
  ] as const,
  companions: [] as const,
  dependencies: [
    "pcre.org/v2",
  ] as const,
  versions: [
    "4.3.1",
    "4.3.0",
    "4.2.1",
    "4.2.0",
    "4.1.1",
  ] as const,
  name: "swig.org" as const,
  domain: "swig.org" as const,
  description: "Package information for swig.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/swig.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +swig.org -- $SHELL -i" as const,
}

export type SwigorgPackage = typeof swigorgPackage
