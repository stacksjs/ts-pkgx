/**
 * Generated from pkgx.dev data
 */
export const condaorgPackage = {
  programs: [
    "conda",
  ] as const,
  companions: [] as const,
  dependencies: [
    "pkgx.sh^1",
    "openssl.org^1.1",
  ] as const,
  versions: [
    "25.3.1",
    "25.1.1",
    "24.11.1",
    "24.9.2",
    "24.7.1",
    "24.5.0",
    "24.4.0",
    "24.3.0",
    "24.1.2",
    "23.11.0",
    "23.10.0",
    "23.9.0",
    "23.7.4",
    "23.7.3",
    "23.7.2",
  ] as const,
  name: "conda.org" as const,
  domain: "conda.org" as const,
  description: "Package information for conda.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/conda.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +conda.org -- $SHELL -i" as const,
}

export type CondaorgPackage = typeof condaorgPackage
