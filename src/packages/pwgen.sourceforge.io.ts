export const pwgensourceforgeioPackage = {
  name: 'pwgen' as const,
  domain: 'pwgen.sourceforge.io' as const,
  description: 'Password generator' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pwgen.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) pwgen' as const,
  programs: [
    'pwgen',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '2.8.0',
  ] as const,
  fullPath: 'pwgen.sourceforge.io' as const,
  aliases: [] as const,
}

export type PwgensourceforgeioPackage = typeof pwgensourceforgeioPackage
