export const opendaporgPackage = {
  name: 'opendap.org' as const,
  domain: 'opendap.org' as const,
  description: 'A new version of libdap that contains both DAP2 and DAP4 support' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/opendap.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +opendap.org -- $SHELL -i' as const,
  programs: [
    'dap-config',
    'dap-config-pkgconfig',
    'getdap',
    'getdap4',
  ] as const,
  companions: [] as const,
  dependencies: [
    'gnome.org/libxml2',
    'openssl.org',
    'curl.se',
    'linuxsourceforge.net/libtirpcgithub.com/util-linux/util-linux',
    'sourceforge.net/libtirpc',
    'github.com/util-linux/util-linux',
  ] as const,
  versions: [
    '3.21.1',
    '3.20.11',
  ] as const,
  fullPath: 'opendap.org' as const,
  aliases: [] as const,
}

export type OpendaporgPackage = typeof opendaporgPackage
