export const jemallocnetPackage = {
  name: 'jemalloc.net' as const,
  domain: 'jemalloc.net' as const,
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jemalloc.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +jemalloc.net -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '5.3.0',
  ] as const,
  fullPath: 'jemalloc.net' as const,
}

export type JemallocnetPackage = typeof jemallocnetPackage
