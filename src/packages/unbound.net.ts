export const unboundnetPackage = {
  name: 'unbound' as const,
  domain: 'unbound.net' as const,
  description: 'Unbound is a validating, recursive, and caching DNS resolver.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/unbound.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +unbound.net -- $SHELL -i' as const,
  programs: [
    'unbound',
    'unbound-anchor',
    'unbound-checkconf',
    'unbound-control',
    'unbound-control-setup',
    'unbound-host',
  ] as const,
  companions: [] as const,
  dependencies: [
    'openssl.org^1',
  ] as const,
  versions: [
    '1.23.0',
    '1.22.0',
    '1.21.1',
    '1.21.0',
    '1.20.0',
    '1.19.3',
    '1.19.2',
    '1.19.1',
    '1.19.0',
    '1.18.0',
    '1.17.1',
  ] as const,
  fullPath: 'unbound.net' as const,
}

export type UnboundnetPackage = typeof unboundnetPackage
