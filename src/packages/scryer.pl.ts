export const scryerplPackage = {
  name: 'Scryer Prolog' as const,
  domain: 'scryer.pl' as const,
  description: 'Modern ISO Prolog implementation written mostly in Rust' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/scryer.pl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) scryer-prolog' as const,
  programs: [
    'scryer-prolog',
  ] as const,
  companions: [] as const,
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  versions: [
    '0.9.4',
  ] as const,
  fullPath: 'scryer.pl' as const,
  aliases: [
    'scryer prolog',
  ] as const,
}

export type ScryerplPackage = typeof scryerplPackage
