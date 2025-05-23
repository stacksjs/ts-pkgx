export const mpmathorgPackage = {
  name: 'mpmath.org' as const,
  domain: 'mpmath.org' as const,
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mpmath.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +mpmath.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    'python.org~3.11',
  ] as const,
  versions: [
    '1.3.0',
  ] as const,
  fullPath: 'mpmath.org' as const,
}

export type MpmathorgPackage = typeof mpmathorgPackage
