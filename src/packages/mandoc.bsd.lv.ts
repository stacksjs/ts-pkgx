export const mandocbsdlvPackage = {
  name: 'mandoc.bsd.lv' as const,
  domain: 'mandoc.bsd.lv' as const,
  description: 'UNIX manpage compiler toolset' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mandoc.bsd.lv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +mandoc.bsd.lv -- $SHELL -i' as const,
  programs: [
    'bsdapropos',
    'bsdman',
    'bsdsoelim',
    'bsdwhatis',
    'demandoc',
    'mandoc',
  ] as const,
  companions: [] as const,
  dependencies: [
    'zlib.net',
  ] as const,
  versions: [
    '1.14.6',
  ] as const,
  fullPath: 'mandoc.bsd.lv' as const,
  aliases: [] as const,
}

export type MandocbsdlvPackage = typeof mandocbsdlvPackage
