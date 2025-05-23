export const pkllangorgPackage = {
  name: 'pkl-lang.org' as const,
  domain: 'pkl-lang.org' as const,
  description: 'A configuration as code language with rich validation and tooling.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pkl-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +pkl-lang.org -- $SHELL -i' as const,
  programs: [
    'jpkl',
    'pkl',
  ] as const,
  companions: [
    'openjdk.org',
  ] as const,
  dependencies: [] as const,
  versions: [
    '0.28.2',
    '0.28.1',
    '0.28.0',
    '0.27.2',
    '0.27.1',
    '0.27.0',
    '0.26.3',
    '0.26.2',
    '0.26.1',
    '0.26.0',
    '0.25.3',
    '0.25.2',
  ] as const,
  fullPath: 'pkl-lang.org' as const,
}

export type PkllangorgPackage = typeof pkllangorgPackage
