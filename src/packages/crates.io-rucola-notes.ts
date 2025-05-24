export const cratesiorucolanotesPackage = {
  name: 'rucola' as const,
  domain: 'crates.io/rucola-notes' as const,
  description: 'Terminal-based markdown note manager.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/rucola-notes/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) rucola' as const,
  programs: [
    'rucola',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.5.0',
  ] as const,
  fullPath: 'crates.io/rucola-notes' as const,
  aliases: [
    'rucola',
    'rucola-notes',
  ] as const,
}

export type CratesiorucolanotesPackage = typeof cratesiorucolanotesPackage
