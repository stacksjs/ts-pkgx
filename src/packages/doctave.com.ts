export const doctavecomPackage = {
  name: 'doctave' as const,
  domain: 'doctave.com' as const,
  description: 'A batteries-included developer documentation site generator' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/doctave.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) doctave' as const,
  programs: [
    'doctave',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.4.2',
  ] as const,
  fullPath: 'doctave.com' as const,
  aliases: [] as const,
}

export type DoctavecomPackage = typeof doctavecomPackage
