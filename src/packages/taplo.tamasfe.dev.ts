export const taplotamasfedevPackage = {
  name: 'taplo' as const,
  domain: 'taplo.tamasfe.dev' as const,
  description: 'A TOML toolkit written in Rust' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/taplo.tamasfe.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) taplo' as const,
  programs: [
    'taplo',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.10.0',
    '0.9.3',
    '0.9.2',
    '0.8.1',
    '0.7.2',
  ] as const,
  fullPath: 'taplo.tamasfe.dev' as const,
  aliases: [] as const,
}

export type TaplotamasfedevPackage = typeof taplotamasfedevPackage
