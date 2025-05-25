export const onefetchdevPackage = {
  name: 'onefetch' as const,
  domain: 'onefetch.dev' as const,
  description: 'Command-line Git information tool' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/onefetch.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) onefetch' as const,
  programs: [
    'onefetch',
  ] as const,
  companions: [] as const,
  dependencies: [
    'libgit2.org~1.7',
  ] as const,
  versions: [
    '2.24.0',
    '2.23.1',
    '2.23.0',
    '2.22.0',
    '2.21.0',
    '2.20.0',
    '2.19.0',
    '2.18.1',
  ] as const,
  fullPath: 'onefetch.dev' as const,
  aliases: [] as const,
}

export type OnefetchdevPackage = typeof onefetchdevPackage
