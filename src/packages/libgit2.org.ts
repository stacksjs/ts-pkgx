export const libgit2orgPackage = {
  name: 'git2' as const,
  domain: 'libgit2.org' as const,
  description: 'A cross-platform, linkable library implementation of Git that you can use in your application.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libgit2.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) git2' as const,
  programs: [
    'git2',
  ] as const,
  companions: [] as const,
  dependencies: [
    'libssh2.org^1',
  ] as const,
  versions: [
    '1.9.0',
    '1.8.4',
    '1.8.3',
    '1.8.2',
    '1.8.1',
    '1.8.0',
    '1.7.2',
    '1.7.1',
    '1.7.0',
    '1.6.5',
    '1.6.4',
  ] as const,
  fullPath: 'libgit2.org' as const,
  aliases: [
    'git2',
  ] as const,
}

export type Libgit2orgPackage = typeof libgit2orgPackage
