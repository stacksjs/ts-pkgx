export const browserusecomPackage = {
  name: 'browser-use.com' as const,
  domain: 'browser-use.com' as const,
  description: 'Make websites accessible for AI agents' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/browser-use.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +browser-use.com -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    'python.org~3.12',
  ] as const,
  versions: [
    '0.2.2',
    '0.2.1',
    '0.1.48',
    '0.1.47',
    '0.1.46',
    '0.1.45',
    '0.1.44',
    '0.1.43',
    '0.1.42',
    '0.1.41',
    '0.1.40',
    '0.1.39',
    '0.1.38',
    '0.1.37',
  ] as const,
  fullPath: 'browser-use.com' as const,
  aliases: [] as const,
}

export type BrowserusecomPackage = typeof browserusecomPackage
