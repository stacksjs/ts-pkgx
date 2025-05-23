export const cratesioflamegraphPackage = {
  name: 'flamegraph' as const,
  domain: 'crates.io' as const,
  description: 'Package information for crates.io/flamegraph' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'sh <(curl https://pkgx.sh) crates.io/flamegraph' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'crates.io/flamegraph' as const,
  aliases: [
    'flamegraph',
  ] as const,
}

export type CratesioflamegraphPackage = typeof cratesioflamegraphPackage
