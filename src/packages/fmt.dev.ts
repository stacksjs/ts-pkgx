export const fmtdevPackage = {
  name: 'fmt.dev' as const,
  domain: 'fmt.dev' as const,
  description: 'A modern formatting library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fmt.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +fmt.dev -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '11.2.0',
    '11.1.4',
    '11.1.3',
    '11.1.2',
    '11.1.1',
    '11.1.0',
    '11.0.2',
    '11.0.1',
    '11.0.0',
    '10.2.1',
    '10.2.0',
    '10.1.1',
    '10.1.0',
    '10.0.0',
    '9.1.0',
  ] as const,
  fullPath: 'fmt.dev' as const,
  aliases: [] as const,
}

export type FmtdevPackage = typeof fmtdevPackage
