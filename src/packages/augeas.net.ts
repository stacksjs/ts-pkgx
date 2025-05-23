export const augeasnetPackage = {
  name: 'augeas.net' as const,
  domain: 'augeas.net' as const,
  description: 'A configuration editing tool and API' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/augeas.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +augeas.net -- $SHELL -i' as const,
  programs: [
    'augmatch',
    'augparse',
    'augprint',
    'augtool',
    'fadot',
  ] as const,
  companions: [] as const,
  dependencies: [
    'gnu.org/readline',
    'gnome.org/libxml2',
  ] as const,
  versions: [
    '1.14.1',
    '1.14.0',
  ] as const,
  fullPath: 'augeas.net' as const,
}

export type AugeasnetPackage = typeof augeasnetPackage
