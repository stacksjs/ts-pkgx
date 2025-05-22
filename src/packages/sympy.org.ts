/**
 * Generated from pkgx.dev data
 */
export const sympyorgPackage = {
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    "python.org>=3.11",
  ] as const,
  versions: [
    "1.14.0",
    "1.13.3",
    "1.13.2",
    "1.13.1",
    "1.13.0",
    "1.12.1",
    "1.12.0",
  ] as const,
  name: "sympy.org" as const,
  domain: "sympy.org" as const,
  description: "Package information for sympy.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/sympy.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +sympy.org -- $SHELL -i" as const,
}

export type SympyorgPackage = typeof sympyorgPackage
