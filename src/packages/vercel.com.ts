export const vercelcomPackage = {
  name: "vercel.com" as const,
  domain: "vercel.com" as const,
  description: "" as const,
  packageYmlUrl: "" as const,
  homepageUrl: "" as const,
  githubUrl: "" as const,
  installCommand: "pkgx vercel.com" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: "vercel.com" as const,
}

export type VercelcomPackage = typeof vercelcomPackage
