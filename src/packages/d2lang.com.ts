export const d2langcomPackage = {
  name: 'd2' as const,
  domain: 'd2lang.com' as const,
  description: 'D2 is a modern diagram scripting language that turns text to diagrams.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/d2lang.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) d2' as const,
  programs: [
    'd2',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.7.0',
    '0.6.9',
    '0.6.8',
    '0.6.7',
    '0.6.6',
    '0.6.5',
    '0.6.4',
    '0.6.3',
    '0.6.2',
    '0.6.1',
    '0.6.0',
  ] as const,
  fullPath: 'd2lang.com' as const,
  aliases: [] as const,
}

export type D2langcomPackage = typeof d2langcomPackage
