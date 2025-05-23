export const jetporchcomPackage = {
  name: 'jetp' as const,
  domain: 'jetporch.com' as const,
  description: 'Read-only mirror: see https://www.jetporch.com/community/sourcehut' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jetporch.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) jetp' as const,
  programs: [
    'jetp',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.0.1',
  ] as const,
  fullPath: 'jetporch.com' as const,
}

export type JetporchcomPackage = typeof jetporchcomPackage
