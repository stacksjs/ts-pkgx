export const straceioPackage = {
  name: 'strace' as const,
  domain: 'strace.io' as const,
  description: 'strace is a diagnostic, debugging and instructional userspace utility for Linux' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/strace.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) strace' as const,
  programs: [
    'strace',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '6.2.0',
  ] as const,
  fullPath: 'strace.io' as const,
}

export type StraceioPackage = typeof straceioPackage
