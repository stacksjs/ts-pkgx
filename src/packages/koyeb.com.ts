export const koyebcomPackage = {
  name: 'koyeb' as const,
  domain: 'koyeb.com' as const,
  description: 'Koyeb cli' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/koyeb.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) koyeb' as const,
  programs: [
    'koyeb',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '5.5.0',
    '5.4.3',
    '5.4.2',
    '5.4.1',
    '5.4.0',
    '5.3.2',
    '5.3.1',
    '5.3.0',
    '5.2.0',
    '5.1.0',
    '5.0.0',
    '4.3.0',
    '4.2.0',
    '4.1.2',
    '4.0.0',
    '3.12.0',
    '3.11.0',
    '3.10.0',
    '3.9.0',
    '3.8.1',
    '3.7.1',
    '3.7.0',
    '3.6.1',
    '3.6.0',
    '3.5.2',
    '3.5.1',
    '3.4.0',
    '3.3.2',
    '3.3.1',
    '3.3.0',
    '3.2.0',
    '3.1.1',
    '3.1.0',
    '3.0.2',
    '3.0.1',
  ] as const,
  fullPath: 'koyeb.com' as const,
  aliases: [] as const,
}

export type KoyebcomPackage = typeof koyebcomPackage
