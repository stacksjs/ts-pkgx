export const tcpdumporgPackage = {
  name: 'pcap-config' as const,
  domain: 'tcpdump.org' as const,
  description: 'the LIBpcap interface to various kernel packet capture mechanism' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tcpdump.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) pcap-config' as const,
  programs: [
    'pcap-config',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.10.5',
    '1.10.4',
  ] as const,
  fullPath: 'tcpdump.org' as const,
  aliases: [
    'pcap-config',
  ] as const,
}

export type TcpdumporgPackage = typeof tcpdumporgPackage
