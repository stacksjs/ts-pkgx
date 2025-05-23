export const moderncorggoyaccPackage = {
  name: 'modernc.org/goyacc' as const,
  domain: 'modernc.org/goyacc' as const,
  description: 'Parser Generator for Go' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/modernc.org/goyacc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) goyacc' as const,
  programs: [
    'goyacc',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.0.3',
  ] as const,
  fullPath: 'modernc.org/goyacc' as const,
  aliases: [
    'goyacc',
  ] as const,
}

export type ModerncorggoyaccPackage = typeof moderncorggoyaccPackage
