export const gleamrunPackage = {
  name: 'gleam' as const,
  domain: 'gleam.run' as const,
  description: '⭐️ A friendly language for building type-safe, scalable systems!' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gleam.run/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) gleam' as const,
  programs: [
    'gleam',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.10.0',
    '1.9.1',
    '1.9.0',
    '1.8.1',
    '1.8.0',
    '1.7.0',
    '1.6.3',
    '1.6.2',
    '1.6.1',
    '1.6.0',
    '1.5.1',
    '1.5.0',
    '1.4.1',
    '1.4.0',
    '1.3.2',
    '1.3.1',
    '1.3.0',
    '1.2.1',
    '1.2.0',
    '1.1.0',
    '1.0.0',
    '0.34.1',
    '0.34.0',
    '0.33.0',
    '0.32.4',
    '0.32.3',
    '0.32.2',
    '0.32.1',
    '0.32.0',
    '0.31.0',
    '0.30.5',
    '0.30.4',
    '0.30.3',
    '0.30.2',
    '0.30.1',
    '0.30.0',
    '0.29.0',
    '0.28.3',
    '0.28.2',
    '0.28.1',
    '0.28.0',
    '0.27.0',
  ] as const,
  fullPath: 'gleam.run' as const,
  aliases: [] as const,
}

export type GleamrunPackage = typeof gleamrunPackage
