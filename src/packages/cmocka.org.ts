export const cmockaorgPackage = {
  name: 'cmocka.org' as const,
  domain: 'cmocka.org' as const,
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cmocka.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +cmocka.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.1.7',
  ] as const,
  fullPath: 'cmocka.org' as const,
}

export type CmockaorgPackage = typeof cmockaorgPackage
