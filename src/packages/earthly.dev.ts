export const earthlydevPackage = {
  name: 'earthly.dev' as const,
  domain: 'earthly.dev' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx earthly.dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'earthly.dev' as const,
  aliases: [] as const,
}

export type EarthlydevPackage = typeof earthlydevPackage
