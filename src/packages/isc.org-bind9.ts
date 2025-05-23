export const iscorgbind9Package = {
  name: 'bind9' as const,
  domain: 'isc.org' as const,
  description: 'Package information for isc.org/bind9' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'sh <(curl https://pkgx.sh) isc.org/bind9' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'isc.org/bind9' as const,
  aliases: [
    'bind9',
  ] as const,
}

export type Iscorgbind9Package = typeof iscorgbind9Package
