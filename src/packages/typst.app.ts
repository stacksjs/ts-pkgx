export const typstappPackage = {
  name: 'typst' as const,
  domain: 'typst.app' as const,
  description: 'A new markup-based typesetting system that is powerful and easy to learn.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/typst.app/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) typst' as const,
  programs: [
    'typst',
  ] as const,
  companions: [] as const,
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  versions: [
    '0.13.1',
    '0.13.0',
    '0.12.0',
    '0.11.1',
    '0.11.0',
    '0.10.0',
    '0.9.0',
    '0.8.0',
    '0.7.0',
    '0.6.0',
    '0.5.0',
    '0.4.0',
    '0.2.0',
    '0.0.0',
  ] as const,
  fullPath: 'typst.app' as const,
  aliases: [] as const,
}

export type TypstappPackage = typeof typstappPackage
