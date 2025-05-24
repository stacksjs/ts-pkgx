export const cratesioduckerPackage = {
  name: 'ducker' as const,
  domain: 'crates.io/ducker' as const,
  description: 'A slightly quackers Docker TUI based on k9s 🦆' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/ducker/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) ducker' as const,
  programs: [
    'ducker',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.3.0',
  ] as const,
  fullPath: 'crates.io/ducker' as const,
  aliases: [
    'ducker',
  ] as const,
}

export type CratesioduckerPackage = typeof cratesioduckerPackage
