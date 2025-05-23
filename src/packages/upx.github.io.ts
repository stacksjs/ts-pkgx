export const upxgithubioPackage = {
  name: 'upx' as const,
  domain: 'upx.github.io' as const,
  description: 'UPX - the Ultimate Packer for eXecutables' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/upx.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) upx' as const,
  programs: [
    'upx',
  ] as const,
  companions: [] as const,
  dependencies: [
    'zlib.net',
  ] as const,
  versions: [
    '5.0.1',
    '5.0.0',
    '4.2.4',
  ] as const,
  fullPath: 'upx.github.io' as const,
}

export type UpxgithubioPackage = typeof upxgithubioPackage
