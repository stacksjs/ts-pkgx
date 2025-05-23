export const dnslookupdogPackage = {
  name: 'dog' as const,
  domain: 'dns.lookup.dog' as const,
  description: 'A command-line DNS client.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dns.lookup.dog/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) dog' as const,
  programs: [
    'dog',
  ] as const,
  companions: [] as const,
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  versions: [
    '0.1.0',
  ] as const,
  fullPath: 'dns.lookup.dog' as const,
  aliases: [
    'dog',
  ] as const,
}

export type DnslookupdogPackage = typeof dnslookupdogPackage
