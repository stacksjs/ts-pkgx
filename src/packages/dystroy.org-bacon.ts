export const dystroyorgbaconPackage = {
  name: 'bacon' as const,
  domain: 'dystroy.org/bacon' as const,
  description: 'Background rust code check' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dystroy.org/bacon/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) bacon' as const,
  programs: [
    'bacon',
  ] as const,
  companions: [] as const,
  dependencies: [
    'linuxalsa-project.org/alsa-lib',
    'alsa-project.org/alsa-lib',
  ] as const,
  versions: [
    '3.14.0',
    '3.13.0',
    '3.12.0',
    '3.11.0',
    '3.10.0',
    '3.9.1',
    '3.9.0',
    '3.8.0',
  ] as const,
  fullPath: 'dystroy.org/bacon' as const,
  aliases: [
    'bacon',
  ] as const,
}

export type DystroyorgbaconPackage = typeof dystroyorgbaconPackage
