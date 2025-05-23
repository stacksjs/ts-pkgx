export const leolangorgPackage = {
  name: 'leo' as const,
  domain: 'leo-lang.org' as const,
  description: '🦁 The Leo Programming Language. A Programming Language for Formally Verified, Zero-Knowledge Applications' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/leo-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) leo' as const,
  programs: [
    'leo',
  ] as const,
  companions: [] as const,
  dependencies: [
    'openssl.org^1.1',
    'curl.se^8.4',
  ] as const,
  versions: [
    '2.6.0',
    '2.5.0',
    '2.4.1',
    '2.4.0',
    '2.3.1',
    '2.3.0',
    '2.2.0',
    '2.1.0',
    '2.0.0',
    '1.12.0',
    '1.11.0',
    '1.10.0',
  ] as const,
  fullPath: 'leo-lang.org' as const,
}

export type LeolangorgPackage = typeof leolangorgPackage
