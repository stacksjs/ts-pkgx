export const attrsorgPackage = {
  name: "attrs.org" as const,
  domain: "attrs.org" as const,
  description: "Python Classes Without Boilerplate" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/attrs.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +attrs.org -- $SHELL -i" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    "python.org~3.11",
  ] as const,
  versions: [
    "25.3.0",
    "25.2.0",
    "25.1.0",
    "24.3.0",
    "24.2.0",
    "24.1.0",
    "23.2.0",
  ] as const,
  fullPath: "attrs.org" as const,
}

export type AttrsorgPackage = typeof attrsorgPackage
