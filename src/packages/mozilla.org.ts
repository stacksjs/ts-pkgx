export const mozillaorgPackage = {
  name: "mozilla.org" as const,
  domain: "mozilla.org" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx mozilla.org" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "mozilla.org" as const,
}

export type MozillaorgPackage = typeof mozillaorgPackage
