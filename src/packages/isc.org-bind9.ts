export const iscorgbind9Package = {
  name: 'bind9' as const,
  domain: 'isc.org/bind9' as const,
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/isc.org/bind9/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +isc.org/bind9 -- $SHELL -i' as const,
  programs: [
    'arpaname',
    'delv',
    'dig',
    'dnssec-cds',
    'dnssec-dsfromkey',
    'dnssec-importkey',
    'dnssec-keyfromlabel',
    'dnssec-keygen',
    'dnssec-ksr',
    'dnssec-revoke',
    'dnssec-settime',
    'dnssec-signzone',
    'dnssec-verify',
    'host',
    'mdig',
    'named-checkconf',
    'named-checkzone',
    'named-compilezone',
    'named-journalprint',
    'named-nzd2nzf',
    'named-rrchecker',
    'nsec3hash',
    'nslookup',
    'nsupdate',
    'ddns-confgen',
    'named',
    'rndc',
    'rndc-confgen',
    'tsig-keygen',
  ] as const,
  companions: [] as const,
  dependencies: [
    'gnome.org/libxml2@2.13',
    'nghttp2.org@1.57',
    'libuv.org@1.49',
    'liburcu.org@0.15',
    'openldap.org/liblmdb@0.9',
    'openssl.org@3',
    'gnu.org/readline@8.2',
    'github.com/json-c/json-c@0.18',
    'gnu.org/libidn2@2.3',
    'jemalloc.net@5',
    'linuxkernel.org/libcap',
    'kernel.org/libcap',
  ] as const,
  versions: [
    '9.21.8',
    '9.21.7',
    '9.21.6',
    '9.21.5',
    '9.21.4',
    '9.20.9',
    '9.20.8',
    '9.20.7',
    '9.20.6',
    '9.18.37',
    '9.18.36',
    '9.18.35',
  ] as const,
  fullPath: 'isc.org/bind9' as const,
  aliases: [
    'bind9',
  ] as const,
}

export type Iscorgbind9Package = typeof iscorgbind9Package
