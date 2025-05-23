export const getcomposerorgPackage = {
  name: 'composer' as const,
  domain: 'getcomposer.org' as const,
  description: 'Dependency Manager for PHP' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/getcomposer.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +getcomposer.org -- $SHELL -i' as const,
  programs: [
    'composer',
    'composer.phar',
  ] as const,
  companions: [] as const,
  dependencies: [
    'php.net',
  ] as const,
  versions: [
    '2.8.9',
    '2.8.8',
    '2.8.7',
    '2.8.6',
    '2.8.5',
    '2.8.4',
    '2.8.3',
    '2.8.2',
    '2.8.1',
    '2.8.0',
    '2.7.9',
    '2.7.8',
    '2.7.7',
    '2.7.6',
    '2.7.5',
    '2.7.4',
    '2.7.3',
    '2.7.2',
    '2.7.1',
    '2.7.0',
    '2.6.6',
    '2.6.5',
    '2.6.4',
    '2.6.3',
    '2.6.2',
    '2.6.1',
    '2.6.0',
    '2.5.8',
    '2.2.24',
    '2.2.23',
  ] as const,
  fullPath: 'getcomposer.org' as const,
  aliases: [
    'composer',
  ] as const,
}

export type GetcomposerorgPackage = typeof getcomposerorgPackage
