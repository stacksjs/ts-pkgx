export const gomplatecaPackage = {
  name: 'gomplate' as const,
  domain: 'gomplate.ca' as const,
  description: 'A flexible commandline tool for template rendering. Supports lots of local and remote datasources.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gomplate.ca/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) gomplate' as const,
  programs: [
    'gomplate',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '4.3.2',
    '4.3.1',
    '4.3.0',
    '4.2.0',
    '4.1.0',
    '4.0.1',
    '4.0.0',
    '3.11.8',
    '3.11.7',
    '3.11.6',
    '3.11.4',
  ] as const,
  fullPath: 'gomplate.ca' as const,
}

export type GomplatecaPackage = typeof gomplatecaPackage
