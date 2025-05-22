/**
 * Generated from pkgx.dev data
 */
export const pytestorgPackage = {
  programs: [
    "pytest",
  ] as const,
  companions: [] as const,
  dependencies: [
    "pkgx.sh^1",
  ] as const,
  versions: [
    "8.3.5",
    "8.3.4",
    "8.3.3",
    "8.3.2",
    "8.3.1",
    "8.3.0",
    "8.2.2",
    "8.2.1",
    "8.2.0",
    "8.1.2",
    "8.1.1",
    "8.1.0",
    "8.0.2",
    "8.0.1",
    "8.0.0",
    "7.4.4",
    "7.4.3",
    "7.4.2",
    "7.4.1",
    "7.4.0",
    "7.3.2",
    "7.3.1",
    "7.3.0",
    "7.2.2",
    "7.1.0",
  ] as const,
  name: "pytest.org" as const,
  domain: "pytest.org" as const,
  description: "Package information for pytest.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/pytest.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +pytest.org -- $SHELL -i" as const,
}

export type PytestorgPackage = typeof pytestorgPackage
