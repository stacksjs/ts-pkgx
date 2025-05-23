export const githubcomkoekeishiyaskhdPackage = {
  name: 'skhd' as const,
  domain: 'github.com/koekeishiya/skhd' as const,
  description: 'Simple hotkey daemon for macOS' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/koekeishiya/skhd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) skhd' as const,
  programs: [
    'skhd',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.3.9',
  ] as const,
  fullPath: 'github.com/koekeishiya/skhd' as const,
  aliases: [
    'skhd',
    'koekeishiya/skhd',
  ] as const,
}

export type GithubcomkoekeishiyaskhdPackage = typeof githubcomkoekeishiyaskhdPackage
