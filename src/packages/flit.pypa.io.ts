export const flitpypaioPackage = {
  name: "flit" as const,
  domain: "flit.pypa.io" as const,
  description: "Simplified packaging of Python modules" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/flit.pypa.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) flit" as const,
  programs: [
    "flit",
  ] as const,
  companions: [] as const,
  dependencies: [
    "python.org>=3<3.12",
  ] as const,
  versions: [
    "3.12.0",
    "3.11.0",
    "3.10.1",
    "3.10.0",
    "3.9.0",
    "3.8.0",
  ] as const,
  fullPath: "flit.pypa.io" as const,
}

export type FlitpypaioPackage = typeof flitpypaioPackage
