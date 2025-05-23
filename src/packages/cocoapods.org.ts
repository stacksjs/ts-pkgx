export const cocoapodsorgPackage = {
  name: 'pod' as const,
  domain: 'cocoapods.org' as const,
  description: 'Dependency manager for Cocoa projects' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cocoapods.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) pod' as const,
  programs: [
    'pod',
  ] as const,
  companions: [] as const,
  dependencies: [
    'ruby-lang.org~3.2',
    'sourceware.org/libffi^3',
    'rubygems.org^3',
    'git-scm.org^2',
  ] as const,
  versions: [
    '1.16.2',
    '1.16.1',
    '1.16.0',
    '1.15.2',
    '1.15.1',
    '1.15.0',
    '1.14.3',
    '1.14.2',
    '1.14.1',
    '1.14.0',
    '1.13.0',
    '1.12.1',
    '1.5.0',
  ] as const,
  fullPath: 'cocoapods.org' as const,
  aliases: [
    'pod',
  ] as const,
}

export type CocoapodsorgPackage = typeof cocoapodsorgPackage
