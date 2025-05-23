export const scalasbtorgPackage = {
  name: 'sbt' as const,
  domain: 'scala-sbt.org' as const,
  description: 'sbt, the interactive build tool' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/scala-sbt.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) sbt' as const,
  programs: [
    'sbt',
  ] as const,
  companions: [] as const,
  dependencies: [
    'openjdk.org',
  ] as const,
  versions: [
    '1.10.11',
    '1.10.10',
    '1.10.9',
    '1.10.7',
    '1.10.6',
    '1.10.5',
    '1.10.4',
    '1.10.3',
    '1.10.2',
    '1.10.1',
    '1.10.0',
    '1.9.9',
    '1.9.8',
    '1.9.7',
    '1.9.6',
    '1.9.5',
    '1.9.4',
    '1.9.3',
  ] as const,
  fullPath: 'scala-sbt.org' as const,
  aliases: [
    'sbt',
  ] as const,
}

export type ScalasbtorgPackage = typeof scalasbtorgPackage
