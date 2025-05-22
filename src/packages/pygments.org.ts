export const pygmentsorgPackage = {
  name: "pygmentize" as const,
  domain: "pygments.org" as const,
  description: "Pygments is a generic syntax highlighter written in Python" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/pygments.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) pygmentize" as const,
  programs: [
    "pygmentize",
  ] as const,
  companions: [] as const,
  dependencies: [
    "python.org~3.11",
  ] as const,
  versions: [
    "2.19.1",
    "2.19.0",
    "2.18.0",
    "2.17.2",
    "2.17.1",
    "2.17.0",
    "2.15.0",
    "2.14.0",
  ] as const,
  fullPath: "pygments.org" as const,
  aliases: [
    "pygmentize",
  ] as const,
}

export type PygmentsorgPackage = typeof pygmentsorgPackage
