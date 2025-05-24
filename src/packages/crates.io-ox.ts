export const cratesiooxPackage = {
  name: 'ox' as const,
  domain: 'crates.io/ox' as const,
  description: 'Independent Rust text editor that runs in your terminal' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/ox/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) ox' as const,
  programs: [
    'ox',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.7.7',
    '0.7.6',
  ] as const,
  fullPath: 'crates.io/ox' as const,
  aliases: [
    'ox',
  ] as const,
}

export type CratesiooxPackage = typeof cratesiooxPackage
