export const tldrshPackage = {
  name: 'tldr' as const,
  domain: 'tldr.sh' as const,
  description: 'C command-line client for tldr pages 📚' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tldr.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) tldr' as const,
  programs: [
    'tldr',
  ] as const,
  companions: [] as const,
  dependencies: [
    'linuxsourceware.org/bzip2^1',
    'sourceware.org/bzip2^1',
    'libzip.org^1.9.2',
    'curl.se',
  ] as const,
  versions: [
    '1.6.1',
    '1.6.0',
    '1.5.0',
  ] as const,
  fullPath: 'tldr.sh' as const,
  aliases: [] as const,
}

export type TldrshPackage = typeof tldrshPackage
