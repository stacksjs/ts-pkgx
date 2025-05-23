export const devpodshPackage = {
  name: 'devpod.sh' as const,
  domain: 'devpod.sh' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx devpod.sh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'devpod.sh' as const,
}

export type DevpodshPackage = typeof devpodshPackage
