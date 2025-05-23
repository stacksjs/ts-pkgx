export const seaweedfscomPackage = {
  name: 'SeaweedFS' as const,
  domain: 'seaweedfs.com' as const,
  description: 'SeaweedFS is a fast distributed storage system for blobs, objects, files, and data lake, for billions of files! Blob store has O(1) disk seek, cloud tiering. Filer supports Cloud Drive, cross-DC active-active replication, Kubernetes, POSIX FUSE mount, S3 API, S3 Gateway, Hadoop, WebDAV, encryption, Erasure Coding.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/seaweedfs.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) weed' as const,
  programs: [
    'weed',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '3.87.0',
    '3.86.0',
    '3.85.0',
    '3.84.0',
    '3.83.0',
    '3.82.0',
    '3.81.0',
    '3.80.0',
    '3.79.0',
  ] as const,
  fullPath: 'seaweedfs.com' as const,
}

export type SeaweedfscomPackage = typeof seaweedfscomPackage
