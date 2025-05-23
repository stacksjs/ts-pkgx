export const wavpackcomPackage = {
  name: 'wavpack.com' as const,
  domain: 'wavpack.com' as const,
  description: 'WavPack encode/decode library, command-line programs, and several plugins' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wavpack.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +wavpack.com -- $SHELL -i' as const,
  programs: [
    'wavpack',
    'wvunpack',
    'wvtag',
    'wvgain',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '5.8.1',
    '5.8.0',
    '5.7.0',
  ] as const,
  fullPath: 'wavpack.com' as const,
  aliases: undefined,
}

export type WavpackcomPackage = typeof wavpackcomPackage
