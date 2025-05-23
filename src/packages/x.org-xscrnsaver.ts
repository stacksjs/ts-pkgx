export const xorgxscrnsaverPackage = {
  name: 'x.org/xscrnsaver' as const,
  domain: 'x.org/xscrnsaver' as const,
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xscrnsaver/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/xscrnsaver -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    'x.org/x11^1',
    'x.org/protocol',
    'x.org/exts',
  ] as const,
  versions: [
    '1.2.4',
  ] as const,
  fullPath: 'x.org/xscrnsaver' as const,
  aliases: [
    'xscrnsaver',
  ] as const,
}

export type XorgxscrnsaverPackage = typeof xorgxscrnsaverPackage
