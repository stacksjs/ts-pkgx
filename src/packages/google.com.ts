export const googlecomPackage = {
  name: "google.com" as const,
  domain: "google.com" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx google.com" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "google.com" as const,
}

export type GooglecomPackage = typeof googlecomPackage
