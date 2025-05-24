export const apktoolorgPackage = {
  name: 'apktool' as const,
  domain: 'apktool.org' as const,
  description: 'Tool for reverse engineering 3rd party, closed, binary Android apps' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apktool.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) apktool' as const,
  programs: [
    'apktool',
  ] as const,
  companions: [] as const,
  dependencies: [
    'openjdk.org^21',
  ] as const,
  versions: [
    '2.11.1',
    '2.11.0',
    '2.10.0',
    '2.9.3',
  ] as const,
  fullPath: 'apktool.org' as const,
  aliases: [] as const,
}

export type ApktoolorgPackage = typeof apktoolorgPackage
