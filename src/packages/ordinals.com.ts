export const ordinalscomPackage = {
  name: 'ord' as const,
  domain: 'ordinals.com' as const,
  description: 'Index, block explorer, and command-line wallet' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ordinals.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) ord' as const,
  programs: [
    'ord',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.6.1',
    '0.6.0',
    '0.5.1',
    '0.5.0',
  ] as const,
  fullPath: 'ordinals.com' as const,
  aliases: [] as const,
}

export type OrdinalscomPackage = typeof ordinalscomPackage
