export const rcloneorgPackage = {
  name: 'rclone' as const,
  domain: 'rclone.org' as const,
  description: '"rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Azure Blob, Azure Files, Yandex Files' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rclone.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) rclone' as const,
  programs: [
    'rclone',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.69.3',
    '1.69.2',
    '1.69.1',
    '1.69.0',
    '1.68.2',
    '1.68.1',
    '1.68.0',
    '1.67.0',
    '1.66.0',
    '1.65.2',
    '1.65.1',
    '1.65.0',
    '1.64.2',
    '1.64.1',
    '1.64.0',
    '1.63.1',
  ] as const,
  fullPath: 'rclone.org' as const,
}

export type RcloneorgPackage = typeof rcloneorgPackage
