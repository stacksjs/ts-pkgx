export const xplrdevPackage = {
  name: 'xplr' as const,
  domain: 'xplr.dev' as const,
  description: 'A hackable, minimal, fast TUI file explorer' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xplr.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) xplr' as const,
  programs: [
    'xplr',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '1.0.0',
    '0.21.10',
    '0.21.9',
    '0.21.8',
  ] as const,
  fullPath: 'xplr.dev' as const,
  aliases: [] as const,
}

export type XplrdevPackage = typeof xplrdevPackage
