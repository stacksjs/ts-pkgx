export const kobuildPackage = {
  name: 'ko' as const,
  domain: 'ko.build' as const,
  description: 'Build and deploy Go applications on Kubernetes' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ko.build/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) ko' as const,
  programs: [
    'ko',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.18.0',
    '0.17.1',
    '0.17.0',
    '0.16.0',
  ] as const,
  fullPath: 'ko.build' as const,
}

export type KobuildPackage = typeof kobuildPackage
