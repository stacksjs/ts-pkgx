export const xvidcomPackage = {
  name: 'xvid.com' as const,
  domain: 'xvid.com' as const,
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xvid.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +xvid.com -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.3.7',
  ] as const,
  fullPath: 'xvid.com' as const,
}

export type XvidcomPackage = typeof xvidcomPackage
