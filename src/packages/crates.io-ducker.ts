export const cratesioduckerPackage = {
  name: 'ducker' as const,
  domain: 'crates.io' as const,
  description: 'Package information for crates.io/ducker' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'sh <(curl https://pkgx.sh) crates.io/ducker' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'crates.io/ducker' as const,
  aliases: [
    'ducker',
  ] as const,
}

export type CratesioduckerPackage = typeof cratesioduckerPackage
