export const pixmanorgPackage = {
  name: 'pixman.org' as const,
  domain: 'pixman.org' as const,
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pixman.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +pixman.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.40.0',
  ] as const,
  fullPath: 'pixman.org' as const,
}

export type PixmanorgPackage = typeof pixmanorgPackage
