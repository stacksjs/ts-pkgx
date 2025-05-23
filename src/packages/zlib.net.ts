export const zlibnetPackage = {
  name: 'zlib.net' as const,
  domain: 'zlib.net' as const,
  description: 'A massively spiffy yet delicately unobtrusive compression library.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/zlib.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +zlib.net -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.3.1',
    '1.3.0',
    '1.2.13',
    '1.2.12',
  ] as const,
  fullPath: 'zlib.net' as const,
  aliases: undefined,
}

export type ZlibnetPackage = typeof zlibnetPackage
