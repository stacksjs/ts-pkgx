export const libislsourceforgeioPackage = {
  name: 'libisl.sourceforge.io' as const,
  domain: 'libisl.sourceforge.io' as const,
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libisl.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +libisl.sourceforge.io -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    'gnu.org/gmp^6',
  ] as const,
  versions: [
    '0.27.0',
    '0.26.0',
  ] as const,
  fullPath: 'libisl.sourceforge.io' as const,
}

export type LibislsourceforgeioPackage = typeof libislsourceforgeioPackage
