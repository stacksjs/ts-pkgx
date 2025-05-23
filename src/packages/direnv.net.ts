export const direnvnetPackage = {
  name: 'direnv' as const,
  domain: 'direnv.net' as const,
  description: 'Load/unload environment variables based on $PWD' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/direnv.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) direnv' as const,
  programs: [
    'direnv',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '2.36.0',
    '2.35.0',
    '2.34.0',
    '2.33.0',
    '2.32.3',
    '2.32.2',
  ] as const,
  fullPath: 'direnv.net' as const,
}

export type DirenvnetPackage = typeof direnvnetPackage
