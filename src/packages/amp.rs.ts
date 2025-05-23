export const amprsPackage = {
  name: 'amp' as const,
  domain: 'amp.rs' as const,
  description: 'A complete text editor for your terminal.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/amp.rs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) amp' as const,
  programs: [
    'amp',
  ] as const,
  companions: [] as const,
  dependencies: [
    'zlib.net@1',
    'libgit2.org@1',
    'linuxopenssl.org@1.1',
    'openssl.org@1.1',
  ] as const,
  versions: [
    '0.7.1',
  ] as const,
  fullPath: 'amp.rs' as const,
}

export type AmprsPackage = typeof amprsPackage
