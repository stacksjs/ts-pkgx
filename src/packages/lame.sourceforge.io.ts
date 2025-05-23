export const lamesourceforgeioPackage = {
  name: 'lame' as const,
  domain: 'lame.sourceforge.io' as const,
  description: 'High quality MPEG Audio Layer III (MP3) encoder' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lame.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) lame' as const,
  programs: [
    'lame',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '3.100.0',
  ] as const,
  fullPath: 'lame.sourceforge.io' as const,
}

export type LamesourceforgeioPackage = typeof lamesourceforgeioPackage
