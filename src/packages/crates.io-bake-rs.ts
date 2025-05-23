export const cratesiobakersPackage = {
  name: 'bake' as const,
  domain: 'crates.io/bake-rs' as const,
  description: 'Simple and easy to use "script runner" written in Rust.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/bake-rs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) bake' as const,
  programs: [
    'bake',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.2.0',
  ] as const,
  fullPath: 'crates.io/bake-rs' as const,
  aliases: [
    'bake',
    'bake-rs',
  ] as const,
}

export type CratesiobakersPackage = typeof cratesiobakersPackage
