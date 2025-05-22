/**
 * Generated from pkgx.dev data
 */
export const doxygennlPackage = {
  programs: [
    "doxygen",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "1.13.2",
    "1.13.1",
    "1.13.0",
    "1.12.0",
    "1.11.0",
    "1.10.0",
    "1.9.8",
    "1.9.7",
    "1.9.6",
  ] as const,
  name: "doxygen.nl" as const,
  domain: "doxygen.nl" as const,
  description: "Package information for doxygen.nl" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/doxygen.nl/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +doxygen.nl -- $SHELL -i" as const,
}

export type DoxygennlPackage = typeof doxygennlPackage
