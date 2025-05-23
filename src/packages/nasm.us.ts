export const nasmusPackage = {
  name: 'nasm.us' as const,
  domain: 'nasm.us' as const,
  description: 'A cross-platform x86 assembler with an Intel-like syntax' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nasm.us/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +nasm.us -- $SHELL -i' as const,
  programs: [
    'nasm',
    'ndisasm',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '2.16.3',
    '2.16.2',
    '2.15.5',
  ] as const,
  fullPath: 'nasm.us' as const,
}

export type NasmusPackage = typeof nasmusPackage
