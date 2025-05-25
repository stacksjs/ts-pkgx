export const srtallianceorgPackage = {
  name: 'srt' as const,
  domain: 'srtalliance.org' as const,
  description: 'Secure, Reliable, Transport' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/srtalliance.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +srtalliance.org -- $SHELL -i' as const,
  programs: [
    'srt-ffplay',
    'srt-file-transmit',
    'srt-live-transmit',
    'srt-tunnel',
  ] as const,
  companions: [] as const,
  dependencies: [
    'openssl.org',
  ] as const,
  versions: [
    '1.5.4',
    '1.5.3',
    '1.5.2',
  ] as const,
  fullPath: 'srtalliance.org' as const,
  aliases: [] as const,
}

export type SrtallianceorgPackage = typeof srtallianceorgPackage
