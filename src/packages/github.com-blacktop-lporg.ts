export const githubcomblacktoplporgPackage = {
  name: 'lporg' as const,
  domain: 'github.com/blacktop/lporg' as const,
  description: 'Organize Your macOS Launchpad Apps' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/blacktop/lporg/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) lporg' as const,
  programs: [
    'lporg',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '20.4.32',
  ] as const,
  fullPath: 'github.com/blacktop/lporg' as const,
  aliases: [
    'lporg',
    'blacktop/lporg',
  ] as const,
}

export type GithubcomblacktoplporgPackage = typeof githubcomblacktoplporgPackage
