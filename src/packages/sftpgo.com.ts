export const sftpgocomPackage = {
  name: 'sftpgo' as const,
  domain: 'sftpgo.com' as const,
  description: 'Full-featured and highly configurable SFTP, HTTP/S, FTP/S and WebDAV server - S3, Google Cloud Storage, Azure Blob' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sftpgo.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) sftpgo' as const,
  programs: [
    'sftpgo',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '2.6.6',
    '2.6.5',
    '2.6.4',
    '2.6.3',
    '2.6.2',
    '2.6.1',
    '2.6.0',
    '2.5.6',
  ] as const,
  fullPath: 'sftpgo.com' as const,
  aliases: [] as const,
}

export type SftpgocomPackage = typeof sftpgocomPackage
