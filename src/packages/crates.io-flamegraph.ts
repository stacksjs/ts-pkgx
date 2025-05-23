export const cratesioflamegraphPackage = {
  name: 'crates.io/flamegraph' as const,
  domain: 'crates.io/flamegraph' as const,
  description: 'Easy flamegraphs for Rust projects and everything else, without Perl or pipes <3' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/flamegraph/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +crates.io/flamegraph -- $SHELL -i' as const,
  programs: [
    'flamegraph',
    'cargo-flamegraph',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.6.8',
    '0.6.7',
  ] as const,
  fullPath: 'crates.io/flamegraph' as const,
  aliases: [
    'flamegraph',
  ] as const,
}

export type CratesioflamegraphPackage = typeof cratesioflamegraphPackage
