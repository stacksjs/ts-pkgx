export const tinybirdcoPackage = {
  name: 'tb' as const,
  domain: 'tinybird.co' as const,
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tinybird.co/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) tb' as const,
  programs: [
    'tb',
  ] as const,
  companions: [] as const,
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [
    '5.20.0',
  ] as const,
  fullPath: 'tinybird.co' as const,
  aliases: [
    'tb',
  ] as const,
}

export type TinybirdcoPackage = typeof tinybirdcoPackage
