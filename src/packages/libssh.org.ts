export const libsshorgPackage = {
  name: 'libssh.org' as const,
  domain: 'libssh.org' as const,
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libssh.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +libssh.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    'openssl.org^1.1',
    'zlib.net^1',
  ] as const,
  versions: [
    '0.11.1',
    '0.11.0',
    '0.10.6',
    '0.10.5',
    '0.10.4',
    '0.9.8',
    '0.9.7',
  ] as const,
  fullPath: 'libssh.org' as const,
}

export type LibsshorgPackage = typeof libsshorgPackage
