export const msgpackorgPackage = {
  name: 'msgpack.org' as const,
  domain: 'msgpack.org' as const,
  description: 'MessagePack implementation for C and C++ / msgpack.org[C/C++]' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/msgpack.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +msgpack.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '6.0.2',
    '6.0.1',
    '6.0.0',
  ] as const,
  fullPath: 'msgpack.org' as const,
  aliases: [] as const,
}

export type MsgpackorgPackage = typeof msgpackorgPackage
