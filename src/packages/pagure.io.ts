export const pagureioPackage = {
  name: "pagure.io" as const,
  domain: "pagure.io" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx pagure.io" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "pagure.io" as const,
}

export type PagureioPackage = typeof pagureioPackage
