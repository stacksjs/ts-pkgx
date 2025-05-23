export const sshxioPackage = {
  name: 'sshx' as const,
  domain: 'sshx.io' as const,
  description: 'Fast, collaborative live terminal sharing over the web' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sshx.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) sshx' as const,
  programs: [
    'sshx',
  ] as const,
  companions: [] as const,
  dependencies: [
    'protobuf.dev',
  ] as const,
  versions: [
    '2023.11.14',
  ] as const,
  fullPath: 'sshx.io' as const,
}

export type SshxioPackage = typeof sshxioPackage
