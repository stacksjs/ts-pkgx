export const dockercomPackage = {
  name: 'docker.com' as const,
  domain: 'docker.com' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx docker.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'docker.com' as const,
}

export type DockercomPackage = typeof dockercomPackage
