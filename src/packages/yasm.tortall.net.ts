export const yasmtortallnetPackage = {
  name: 'yasm' as const,
  domain: 'yasm.tortall.net' as const,
  description: 'Yasm Assembler mainline development tree' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/yasm.tortall.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) yasm' as const,
  programs: [
    'yasm',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.3.0',
  ] as const,
  fullPath: 'yasm.tortall.net' as const,
}

export type YasmtortallnetPackage = typeof yasmtortallnetPackage
