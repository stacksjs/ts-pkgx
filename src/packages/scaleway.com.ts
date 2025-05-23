export const scalewaycomPackage = {
  name: 'scw' as const,
  domain: 'scaleway.com' as const,
  description: 'Command Line Interface for Scaleway' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/scaleway.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) scw' as const,
  programs: [
    'scw',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '2.39.0',
    '2.38.0',
    '2.37.0',
    '2.36.0',
    '2.35.0',
    '2.34.0',
    '2.33.0',
    '2.32.1',
  ] as const,
  fullPath: 'scaleway.com' as const,
  aliases: [
    'scw',
  ] as const,
}

export type ScalewaycomPackage = typeof scalewaycomPackage
