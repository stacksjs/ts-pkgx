export const corednsioPackage = {
  name: 'coredns' as const,
  domain: 'coredns.io' as const,
  description: 'CoreDNS is a DNS server that chains plugins' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/coredns.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) coredns' as const,
  programs: [
    'coredns',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.12.1',
    '1.12.0',
    '1.11.4',
    '1.11.3',
    '1.11.2',
    '1.11.1',
    '1.10.1',
  ] as const,
  fullPath: 'coredns.io' as const,
  aliases: [] as const,
}

export type CorednsioPackage = typeof corednsioPackage
