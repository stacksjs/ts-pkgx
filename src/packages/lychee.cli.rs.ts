export const lycheeclirsPackage = {
  name: 'lychee' as const,
  domain: 'lychee.cli.rs' as const,
  description: '⚡ Fast, async, stream-based link checker written in Rust. Finds broken URLs and mail addresses inside Markdown, HTML, reStructuredText, websites and more!' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lychee.cli.rs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) lychee' as const,
  programs: [
    'lychee',
  ] as const,
  companions: [] as const,
  dependencies: [
    'openssl.org>=1.1',
  ] as const,
  versions: [
    '0.15.1',
    '0.15.0',
    '0.14.3',
    '0.14.2',
    '0.14.1',
  ] as const,
  fullPath: 'lychee.cli.rs' as const,
  aliases: [] as const,
}

export type LycheeclirsPackage = typeof lycheeclirsPackage
