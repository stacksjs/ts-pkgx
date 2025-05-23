export const tidbytcomPackage = {
  name: 'pixlet' as const,
  domain: 'tidbyt.com' as const,
  description: 'Build apps for pixel-based displays ✨' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tidbyt.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) pixlet' as const,
  programs: [
    'pixlet',
  ] as const,
  companions: [] as const,
  dependencies: [
    'google.com/webp^1',
  ] as const,
  versions: [
    '0.34.0',
    '0.33.5',
    '0.33.4',
    '0.33.3',
    '0.33.2',
    '0.33.1',
    '0.33.0',
    '0.32.7',
    '0.32.6',
    '0.32.5',
    '0.32.4',
    '0.32.3',
    '0.32.2',
    '0.32.1',
    '0.32.0',
    '0.31.0',
    '0.30.2',
    '0.30.1',
    '0.30.0',
    '0.29.1',
  ] as const,
  fullPath: 'tidbyt.com' as const,
  aliases: [
    'pixlet',
  ] as const,
}

export type TidbytcomPackage = typeof tidbytcomPackage
