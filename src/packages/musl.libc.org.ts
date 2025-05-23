export const musllibcorgPackage = {
  name: 'musl.libc.org' as const,
  domain: 'musl.libc.org' as const,
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/musl.libc.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +musl.libc.org -- $SHELL -i' as const,
  programs: [
    'ld.musl-clang',
    'musl-clang',
  ] as const,
  companions: [] as const,
  dependencies: [
    'llvm.org',
  ] as const,
  versions: [
    '1.2.3',
  ] as const,
  fullPath: 'musl.libc.org' as const,
}

export type MusllibcorgPackage = typeof musllibcorgPackage
