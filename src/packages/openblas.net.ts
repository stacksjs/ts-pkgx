export const openblasnetPackage = {
  name: 'openblas.net' as const,
  domain: 'openblas.net' as const,
  description: 'OpenBLAS is an optimized BLAS library based on GotoBLAS2 1.13 BSD version.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openblas.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +openblas.net -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.3.29',
    '0.3.28',
    '0.3.27',
    '0.3.26',
    '0.3.25',
    '0.3.24',
    '0.3.23',
  ] as const,
  fullPath: 'openblas.net' as const,
  aliases: [] as const,
}

export type OpenblasnetPackage = typeof openblasnetPackage
