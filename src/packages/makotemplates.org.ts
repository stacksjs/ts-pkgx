export const makotemplatesorgPackage = {
  name: "mako-render" as const,
  domain: "makotemplates.org" as const,
  description: "Mako Templates for Python" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/makotemplates.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) mako-render" as const,
  programs: [
    "mako-render",
  ] as const,
  companions: [] as const,
  dependencies: [
    "python.org~3.11",
  ] as const,
  versions: [
    "1.3.10",
    "1.3.9",
    "1.3.8",
    "1.3.7",
    "1.3.6",
    "1.3.5",
    "1.3.4",
    "1.3.3",
    "1.3.2",
    "1.3.1",
    "1.3.0",
    "1.2.4",
  ] as const,
  fullPath: "makotemplates.org" as const,
  aliases: [
    "mako-render",
  ] as const,
}

export type MakotemplatesorgPackage = typeof makotemplatesorgPackage
