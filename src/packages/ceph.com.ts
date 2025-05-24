export const cephcomPackage = {
  name: 'ceph.com' as const,
  domain: 'ceph.com' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx ceph.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'ceph.com' as const,
  aliases: [] as const,
}

export type CephcomPackage = typeof cephcomPackage
