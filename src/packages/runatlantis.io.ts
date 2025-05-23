export const runatlantisioPackage = {
  name: 'atlantis' as const,
  domain: 'runatlantis.io' as const,
  description: 'Terraform Pull Request Automation tool' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/runatlantis.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) atlantis' as const,
  programs: [
    'atlantis',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.34.0',
    '0.33.0',
    '0.32.0',
    '0.31.0',
    '0.30.0',
    '0.29.0',
    '0.28.5',
    '0.28.4',
    '0.28.3',
    '0.28.2',
    '0.28.1',
    '0.28.0',
    '0.27.3',
    '0.27.2',
    '0.27.1',
    '0.27.0',
    '0.26.0',
    '0.25.0',
  ] as const,
  fullPath: 'runatlantis.io' as const,
  aliases: [
    'atlantis',
  ] as const,
}

export type RunatlantisioPackage = typeof runatlantisioPackage
