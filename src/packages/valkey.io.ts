export const valkeyioPackage = {
  name: 'valkey.io' as const,
  domain: 'valkey.io' as const,
  description: 'Package information for valkey.io' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'sh <(curl https://pkgx.sh) valkey.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'valkey.io' as const,
}

export type ValkeyioPackage = typeof valkeyioPackage
