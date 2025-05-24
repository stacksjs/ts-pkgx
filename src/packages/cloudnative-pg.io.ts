export const cloudnativepgioPackage = {
  name: 'kubectl-cnpg' as const,
  domain: 'cloudnative-pg.io' as const,
  description: 'CloudNativePG is a comprehensive platform designed to seamlessly manage PostgreSQL databases within Kubernetes environments, covering the entire operational lifecycle from initial deployment to ongoing maintenance' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cloudnative-pg.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) kubectl-cnpg' as const,
  programs: [
    'kubectl-cnpg',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.26.0',
    '1.25.2',
    '1.25.1',
    '1.25.0',
    '1.24.4',
    '1.24.3',
  ] as const,
  fullPath: 'cloudnative-pg.io' as const,
  aliases: [
    'kubectl-cnpg',
  ] as const,
}

export type CloudnativepgioPackage = typeof cloudnativepgioPackage
