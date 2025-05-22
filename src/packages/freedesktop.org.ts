export const freedesktoporgPackage = {
  name: "freedesktop.org" as const,
  domain: "freedesktop.org" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx freedesktop.org" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "freedesktop.org" as const,
}

export type FreedesktoporgPackage = typeof freedesktoporgPackage
