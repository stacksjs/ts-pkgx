export const dystroyorgbaconPackage = {
  name: 'bacon' as const,
  domain: 'dystroy.org' as const,
  description: 'Package information for dystroy.org/bacon' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'sh <(curl https://pkgx.sh) dystroy.org/bacon' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'dystroy.org/bacon' as const,
  aliases: [
    'bacon',
  ] as const,
}

export type DystroyorgbaconPackage = typeof dystroyorgbaconPackage
