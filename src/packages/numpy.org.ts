/**
 * Generated from pkgx.dev data
 */
export const numpyorgPackage = {
  programs: [
    "f2py",
  ] as const,
  companions: [
    "gnu.org/gcc",
  ] as const,
  dependencies: [
    "openblas.net^0.3",
    "python.org^3.11",
  ] as const,
  versions: [
    "2.2.6",
    "2.2.5",
    "2.2.4",
    "2.2.3",
    "2.2.2",
    "2.2.1",
    "2.2.0",
    "2.1.3",
    "2.1.2",
    "2.1.1",
    "2.1.0",
    "2.0.2",
    "2.0.1",
    "2.0.0",
    "1.26.4",
    "1.26.3",
    "1.26.2",
  ] as const,
  aliases: [
    "f2py",
  ] as const,
  name: "numpy.org" as const,
  domain: "numpy.org" as const,
  description: "Package information for numpy.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/numpy.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +numpy.org -- $SHELL -i" as const,
}

export type NumpyorgPackage = typeof numpyorgPackage
