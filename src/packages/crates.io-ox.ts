export const cratesiooxPackage = {
  name: 'ox' as const,
  domain: 'crates.io' as const,
  description: 'Package information for crates.io/ox' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'sh <(curl https://pkgx.sh) crates.io/ox' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'crates.io/ox' as const,
  aliases: [
    'ox',
  ] as const,
}

export type CratesiooxPackage = typeof cratesiooxPackage
