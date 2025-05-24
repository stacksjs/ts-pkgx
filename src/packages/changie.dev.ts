export const changiedevPackage = {
  name: 'changie' as const,
  domain: 'changie.dev' as const,
  description: 'Automated changelog tool for preparing releases with lots of customization options' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/changie.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) changie' as const,
  programs: [
    'changie',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.21.1',
    '1.21.0',
    '1.20.1',
    '1.20.0',
    '1.19.1',
    '1.19.0',
    '1.18.0',
  ] as const,
  fullPath: 'changie.dev' as const,
  aliases: [] as const,
}

export type ChangiedevPackage = typeof changiedevPackage
