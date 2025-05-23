export const cratesiorucolanotesPackage = {
  name: 'rucola-notes' as const,
  domain: 'crates.io' as const,
  description: 'Package information for crates.io/rucola-notes' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'sh <(curl https://pkgx.sh) crates.io/rucola-notes' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'crates.io/rucola-notes' as const,
  aliases: [
    'rucola-notes',
  ] as const,
}

export type CratesiorucolanotesPackage = typeof cratesiorucolanotesPackage
