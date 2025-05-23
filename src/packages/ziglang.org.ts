export const ziglangorgPackage = {
  name: 'zig' as const,
  domain: 'ziglang.org' as const,
  description: 'General-purpose programming language and toolchain for maintaining robust, optimal, and reusable software.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ziglang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) zig' as const,
  programs: [
    'zig',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.14.0',
    '0.13.0',
    '0.12.1',
    '0.12.0',
    '0.11.0',
    '0.10.1',
  ] as const,
  fullPath: 'ziglang.org' as const,
  aliases: undefined,
}

export type ZiglangorgPackage = typeof ziglangorgPackage
