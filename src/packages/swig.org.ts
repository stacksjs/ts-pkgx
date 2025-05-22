export const swigorgPackage = {
  name: "swig.org" as const,
  domain: "swig.org" as const,
  description: "SWIG is a software development tool that connects programs written in C and C++ with a variety of high-level programming languages." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/swig.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +swig.org -- $SHELL -i" as const,
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
  fullPath: "swig.org" as const,
}

export type SwigorgPackage = typeof swigorgPackage
