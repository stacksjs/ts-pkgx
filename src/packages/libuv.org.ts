export const libuvorgPackage = {
  name: 'libuv.org' as const,
  domain: 'libuv.org' as const,
  description: 'Cross-platform asynchronous I/O' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libuv.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +libuv.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.51.0',
    '1.50.0',
    '1.49.2',
    '1.49.1',
    '1.49.0',
    '1.48.0',
    '1.47.0',
    '1.46.0',
    '1.45.0',
    '1.44.2',
  ] as const,
  fullPath: 'libuv.org' as const,
  aliases: [] as const,
}

export type LibuvorgPackage = typeof libuvorgPackage
